using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Vta.Models;
using Vta.RequestModels;
using Vta.ViewModels;

namespace Vta.Admin.Mvc
{
    public class ControllerHelper
    {

        public ControllerHelper(string courseId="", string levelId = "", string contentId = "", string questionId = "", string keyword = "", string orderBy = "", string isAscending = "")
        {
            CourseId = courseId;
            LevelId = levelId;
            ContentId = contentId;
            QuestionId = questionId;
            Keyword = keyword;
            OrderBy = orderBy;
            IsAscending = isAscending;

            VtaDbContext db = new VtaDbContext();
            var defaultItem = new DropdownViewModel() { Id = new Guid().ToString(), Name = "All" };
            
            // filter preparation
            var courses = db.Courses.ToDropdownList();
            courses.Insert(0, defaultItem);
            if (string.IsNullOrWhiteSpace(CourseId))
            {
                CourseId = defaultItem.Id;
            }

            var levels = db.Levels.FilterBy(CourseId, x => x.CourseId == CourseId).ToDropdownList();
            levels.Insert(0, defaultItem);
            if (string.IsNullOrWhiteSpace(LevelId))
            {
                LevelId = defaultItem.Id;
            }

            var contents = db.Contents.FilterBy(CourseId, x => x.Level.CourseId == CourseId).FilterBy(LevelId, x => x.LevelId == LevelId).ToDropdownList();
            contents.Insert(0, defaultItem);
            if (string.IsNullOrWhiteSpace(ContentId))
            {
                ContentId = defaultItem.Id;
            }

            var questions = db.Questions.ByCourse(CourseId).ByLevel(LevelId).ByContent(ContentId).ToDropdownList();
            questions.Insert(0,defaultItem);
            if (string.IsNullOrWhiteSpace(QuestionId))
            {
                QuestionId = defaultItem.Id;
            }

            if (string.IsNullOrWhiteSpace(OrderBy))
            {
                OrderBy = "Modified";
            }
            if (string.IsNullOrWhiteSpace(IsAscending))
            {
                IsAscending = "True";
            }

            // viewbag populate
            CoursesSelectList = new SelectList(courses, "Id", "Name", CourseId);
            LevelsSelectList = new SelectList(levels, "Id", "Name", LevelId);
            ContentsSelectList = new SelectList(contents, "Id", "Name", ContentId);
            QuestionsSelectList = new SelectList(questions,"Id","Name",QuestionId);

            OrderBySelectList = new SelectList(new List<string>() { "Name", "No", "Modified" }, OrderBy);
            IsAscendingSelectList = new SelectList(new List<string>() { "True", "False" }, IsAscending);
        }

        public string Keyword { get; }

        public string IsAscending { get;}

        public string OrderBy { get; }

        public string QuestionId { get;}

        public string ContentId { get; }

        public string LevelId { get;  }

        public string CourseId { get; }

        public SelectList IsAscendingSelectList { get;  }

        public SelectList OrderBySelectList { get;  }

        public SelectList QuestionsSelectList { get;}

        public SelectList ContentsSelectList { get;  }

        public SelectList LevelsSelectList { get;  }

        public SelectList CoursesSelectList { get; }    


    }
}
