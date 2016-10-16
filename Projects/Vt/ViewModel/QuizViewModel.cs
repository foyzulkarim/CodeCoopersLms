using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess;

namespace ViewModel
{
    public class QuizViewModel
    {
   
        public QuizViewModel()
        {
            
        }
        public QuizViewModel(TraineeQuizHistory history)
        {
          //  this.Content = new ContentViewModel(history.Content);
            this.Id = history.Id;
            ContentId = history.ContentId;
            this.IsCompleted = history.IsCompleted;
            Quiz quiz = history.Quiz;
            this.Count = quiz.QuizQuestions.Count(x => x.IsActive);
            this.Name = quiz.Name;
            this.Questions = quiz.QuizQuestions.Where(x=>x.IsActive).OrderBy(x=>x.SerialNo).Select(x => new QuestionViewModel(x)).ToList();            
        }

        public string Name { get; set; }

        public int Count { get; set; }

        //public int Type { get; set; }

        //public ContentViewModel Content { get; set; }

        public Guid ContentId { get; set; }

        public Guid Id { get; set; }

        public bool IsCompleted { get; set; }

        public List<QuestionViewModel> Questions { get; set; }
    }
}