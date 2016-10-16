using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess;
using ViewModel;

namespace Manager
{
    public interface IContentService
    {
        List<LevelViewModel> GetContents(Guid traineeId);
        Task<ContentDetailViewModel> GetContentDetail(Guid contentId, Guid traineeId);

        Task<ResponseModel> UnlockContent(int currentContentNo, int levelNo, Guid traineeId);
        Task<bool> IsUnlocked(Guid contentId, Guid traineeId);
        Task<Guid> GetId(int no, int level);
        Task<SerialNumbers> GetNo(Guid contentId);

        Task<QuizViewModel> GetQuizDetail(Guid contentId, Guid traineeId);
        Task<bool> SubmitAnswer(AnswerViewModel answer, Guid traineeId);
        Task<bool> SubmitAssignment(AnswerViewModel answer, Guid traineeId);
        int GetContentType(Guid id);
        int GetQuizType(AnswerViewModel answer);
    }

    public class ContentService : IContentService
    {
        private IValidationService validationService;
        public ContentService(VirtualtraineesEntities db)
        {
            this.Db = db;
            validationService = new ValidationService(Db);
        }

        private VirtualtraineesEntities Db { get; set; }

        public List<LevelViewModel> GetContents(Guid traineeId)
        {
            List<LevelViewModel> models = Db.Levels.ToList().OrderBy(x=>x.No).ToList().Select(x => new LevelViewModel(x)).ToList();
            List<Guid> ids = Db.TraineeHistories.Where(x => x.TraineeId == traineeId).AsEnumerable().Select(x => x.ContentId).ToList();
            models.ForEach(x => x.Contents.ForEach(y => y.Id = ClearGuid(ids, y)));
            return models.ToList();
        }

        private Guid ClearGuid(List<Guid> ids, ContentViewModel y)
        {
            return ids.Contains(y.Id) ? y.Id : new Guid();
        }

        public async Task<ContentDetailViewModel> GetContentDetail(Guid contentId, Guid traineeId)
        {
            var history = await Db.TraineeHistories.FirstOrDefaultAsync(x => x.TraineeId == traineeId && x.ContentId == contentId);
            if (history != null)
            {
                Content content = await Db.Contents.FindAsync(contentId);
                ContentDetailViewModel detailViewModel = new ContentDetailViewModel(content);
                return detailViewModel;
            }

            return null;
        }

        public ContentDetailViewModel GetDetail(Guid contentId, Guid traineeId)
        {
            var history = Db.TraineeHistories.FirstOrDefault(x => x.TraineeId == traineeId && x.ContentId == contentId);
            if (history != null)
            {
                Content content = Db.Contents.Find(contentId);
                ContentDetailViewModel detailViewModel = new ContentDetailViewModel(content);
                return detailViewModel;
            }

            return null;
        }

        public async Task<ResponseModel> UnlockContent(int currentContentNo,int levelNo, Guid traineeId)
        {
            int serialNumber = currentContentNo + 1;
            
            /*
             * is the content is allowed to be unlocked by this user?
             * did the user finished the previous content/quiz? skip if the previous is 0
             * insert new history entry
             */
            Level currentLevel = await Db.Levels.FirstOrDefaultAsync(x => x.No == levelNo);
            Content nextContent = await Db.Contents.FirstOrDefaultAsync(x => x.No == serialNumber && x.LevelId == currentLevel.Id);
            ResponseModel response = await validationService.IsValidRequestAsync(nextContent.Id, traineeId);
            if (response.IsSuccess)
            {
                if (currentContentNo>0)
                {
                    Content currentContent = await Db.Contents.FirstOrDefaultAsync(x => x.No == currentContentNo && x.LevelId == currentLevel.Id);
                    TraineeQuizHistory prevHistory = await
                        Db.TraineeQuizHistories.FirstOrDefaultAsync(
                            x => x.ContentId == currentContent.Id && x.TraineeId == traineeId);
                    if (!prevHistory.IsCompleted)
                    {
                        response = new ResponseModel(null,false,MessageContainer.PreviousContentIsUncompleted);
                    }                    
                }
                if (response.IsSuccess)
                {
                   var history = new TraineeHistory()
                    {
                        ContentId = nextContent.Id,
                        TraineeId = traineeId,
                        LastAccessed = DateTime.Now,
                        Unlocked = DateTime.Now,
                        Point = 0, 
                    };
                    Db.TraineeHistories.Add(history);
                    await Db.SaveChangesAsync();
                    response =
                        new ResponseModel(new TraineeHistory()
                        {
                            Id = history.Id,
                            ContentId = history.ContentId,
                            TraineeId = history.TraineeId
                        });
                }
                
            }
           
            return response;
        }

        public async Task<bool> IsUnlocked(Guid contentId, Guid traineeId)
        {
            TraineeHistory history = await Db.TraineeHistories.FirstOrDefaultAsync(x => x.ContentId == contentId && x.TraineeId == traineeId);
            return history != null;
        }

        public async Task<Guid> GetId(int no,int level)
        {
            var content = await Db.Contents.FirstOrDefaultAsync(x => x.No == no && x.Level.No==level);
            return content != null ? content.Id : new Guid();
        }

        public async Task<SerialNumbers> GetNo(Guid contentId)
        {
            Content content = (await Db.Contents.FindAsync(contentId));
            return new SerialNumbers {ContentNo = content.No, LevelNo = content.Level.No};
        }

        public async Task<QuizViewModel> GetQuizDetail(Guid contentId, Guid traineeId)
        {
            TraineeQuizHistory history = await Db.TraineeQuizHistories.FirstOrDefaultAsync(
                x => x.ContentId == contentId && x.TraineeId == traineeId);
            if (history == null)
            {
                history = new TraineeQuizHistory()
               {
                   ContentId = contentId,
                   TraineeId = traineeId,
                   IsCompleted = false,
                   LastAccessed = DateTime.Now,
                   Appeared = DateTime.Now,
                   CorrectAnswer = 0,
                   Point = 0,
                   QuizId = Db.Contents.Find(contentId).Quizs.First().Id
               };
                Db.TraineeQuizHistories.Add(history);
                await Db.SaveChangesAsync();
            }
            return new QuizViewModel(history);
        }

        public async Task<bool> SubmitAnswer(AnswerViewModel answer, Guid traineeId)
        {
            bool allCorrect = true;
            foreach (var model in answer.Answers)
            {
                Question dbQuestion = await Db.Questions.FindAsync(model.QuestionId);
                Option option = dbQuestion.Options.First(x => x.IsAnswer);

                if (option.Name != model.AnswerText)
                {
                    allCorrect = false;
                    break;
                }
            }
            TraineeQuizHistory history = await Db.TraineeQuizHistories.FindAsync(answer.QuizHistoryId);
            history.LastAccessed = DateTime.Now;
            if (allCorrect)
            {
                history.IsCompleted = true;
                history.Point = answer.Answers.Count;
                Trainee trainee = await Db.Trainees.FindAsync(traineeId);
                trainee.Point += history.Point;

                // save this answer history to the table for future reference
                foreach (Answer a in answer.Answers)
                {
                    TraineeQuizAnswerHistory answerHistory = new TraineeQuizAnswerHistory()
                    {
                        TraineeId = traineeId,
                        QuizHistoryId = answer.QuizHistoryId,
                        QuestionId = a.QuestionId,
                        Answer = a.AnswerText,
                        IsCorrect = true,
                        IsVerified = true,
                        AnswerDate = DateTime.Now
                    };
                    Db.TraineeQuizAnswerHistories.Add(answerHistory);
                }
            }
            
            await Db.SaveChangesAsync();
            return allCorrect;
        }

        public async Task<bool> SubmitAssignment(AnswerViewModel answer, Guid traineeId)
        {
            foreach (Answer a in answer.Answers)
            {
                TraineeQuizAnswerHistory answerHistory = new TraineeQuizAnswerHistory()
                {
                    TraineeId = traineeId,
                    QuizHistoryId = answer.QuizHistoryId,
                    QuestionId = a.QuestionId,
                    Answer = a.AnswerText,
                    IsCorrect = false,
                    IsVerified = false,
                    AnswerDate = DateTime.Now
                };
                Db.TraineeQuizAnswerHistories.Add(answerHistory);
            }
            TraineeQuizHistory history = await Db.TraineeQuizHistories.FindAsync(answer.QuizHistoryId);
            history.LastAccessed = DateTime.Now;
            history.IsCompleted = true;
            int i = await Db.SaveChangesAsync();
            return true;
        }

        public int GetQuizType(AnswerViewModel answer)
        {
            Guid quizId = Db.TraineeQuizHistories.Find(answer.QuizHistoryId).QuizId;
            var quizQuestions =
                Db.QuizQuestions.First(x => x.QuizId == quizId);
            return quizQuestions.Question.Type;
        }

        public int GetContentType(Guid id)
        {
            return Db.Contents.Find(id).Type;
        }

        public bool SubmitAnswerForTest(QuizViewModel quiz, Guid traineeId)
        {
            bool allCorrect = true;
            foreach (QuestionViewModel question in quiz.Questions)
            {
                Question dbQuestion =  Db.Questions.Find(question.Id);
                Option answer = dbQuestion.Options.First(x => x.IsAnswer);
                Option option = question.Options.First(x => x.IsAnswer);
                if (answer.Id != option.Id)
                {
                    allCorrect = false;
                    break;
                }
            }
            if (allCorrect)
            {
                var history =  Db.TraineeQuizHistories.Find(quiz.Id);
                history.IsCompleted = true;
                history.LastAccessed = DateTime.Now;
                history.Point = quiz.Questions.Count;
            }
             Db.SaveChangesAsync();
            return allCorrect;
        }

        public QuizViewModel GetQuizDetailForTest(Guid contentId, Guid traineeId)
        {
            TraineeQuizHistory history =  Db.TraineeQuizHistories.FirstOrDefault(
              x => x.ContentId == contentId && x.TraineeId == traineeId);
            if (history == null)
            {
                history = new TraineeQuizHistory()
                {
                    ContentId = contentId,
                    TraineeId = traineeId,
                    IsCompleted = false,
                    LastAccessed = DateTime.Now,
                    Appeared = DateTime.Now,
                    CorrectAnswer = 0,
                    Point = 0,
                    QuizId = Db.Contents.Find(contentId).Quizs.First().Id
                };
                Db.TraineeQuizHistories.Add(history);
                 Db.SaveChanges();
            }
            return new QuizViewModel(history);
        }
    }
}
