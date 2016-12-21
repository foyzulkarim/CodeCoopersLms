using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Vta.Models;


namespace Vta.RequestModels
{
    public static class FilterCollection
    {     
        public static IQueryable<T> FilterBy<T>(this IQueryable<T> queryable, string id, Expression<Func<T, bool>> predicate)
        {            
            if (!string.IsNullOrWhiteSpace(id) && id != new Guid().ToString())
            {
                queryable = queryable.Where(predicate);
            }
            return queryable;
        }

        // Level 
        public static IQueryable<Level> ByCourse(this IQueryable<Level> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.CourseId == id);
        }

        // Content 
        public static IQueryable<Content> ByCourse(this IQueryable<Content> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Level.CourseId == id);
        }
        public static IQueryable<Content> ByLevel(this IQueryable<Content> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.LevelId == id);
        }

        public static IQueryable<Content> ByPublic(this IQueryable<Content> queryable)
        {
            return queryable.FilterBy(null, x => x.IsPublic);
        }

        // Question 
        public static IQueryable<Question> ByCourse(this IQueryable<Question> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Content.Level.CourseId == id);
        }
        public static IQueryable<Question> ByLevel(this IQueryable<Question> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Content.LevelId == id);
        }
        public static IQueryable<Question> ByContent(this IQueryable<Question> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.ContentId == id);
        }

        // Option 
        public static IQueryable<Option> ByCourse(this IQueryable<Option> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Question.Content.Level.CourseId == id);
        }
        public static IQueryable<Option> ByLevel(this IQueryable<Option> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Question.Content.LevelId == id);
        }
        public static IQueryable<Option> ByContent(this IQueryable<Option> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Question.ContentId == id);
        }
        public static IQueryable<Option> ByQuestion(this IQueryable<Option> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.QuestionId == id);
        }

        // File       
        public static IQueryable<File> ByCourse(this IQueryable<File> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Content.Level.CourseId == id);
        }
        public static IQueryable<File> ByLevel(this IQueryable<File> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Content.LevelId == id);
        }
        public static IQueryable<File> ByContent(this IQueryable<File> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.ContentId == id);
        }

        // Website       
        public static IQueryable<Website> ByCourse(this IQueryable<Website> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Content.Level.CourseId == id);
        }
        public static IQueryable<Website> ByLevel(this IQueryable<Website> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.Content.LevelId == id);
        }
        public static IQueryable<Website> ByContent(this IQueryable<Website> queryable, string id)
        {
            return queryable.FilterBy(id, x => x.ContentId == id);
        }

    }





}