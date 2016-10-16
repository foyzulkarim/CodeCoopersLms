using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess;

namespace ViewModel
{
    public class AnswerViewModel
    {
        public Guid ContentId { get; set; }
        public Guid QuizHistoryId { get; set; }
        public List<Answer> Answers { get; set; }
    }

    public class Answer
    {
        public Guid QuestionId { get; set; }
        public string AnswerText { get; set; }
    }


    public class QuestionViewModel
    {
        public QuestionViewModel()
        {
            
        }
        public QuestionViewModel(QuizQuestion quizQuestion)
        {
            var question = quizQuestion.Question;
            this.Name = question.Name;
            this.Description = question.Description;
            this.Options =
                question.Options.Select(
                    x => new Option() {Id = x.Id, Name = x.Name, QuestionId = x.QuestionId}).ToList();
            this.No = quizQuestion.SerialNo;
            this.Id = question.Id;
            this.Type = question.Type;
            //IsSelected: "true"
        }

        public int Type { get; set; }

        public Guid Id { get; set; }

        public int No { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public List<Option> Options { get; set; }
    }
}