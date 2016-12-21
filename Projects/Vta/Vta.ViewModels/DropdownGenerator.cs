using System.Collections.Generic;
using System.Linq;
using Vta.Models;

namespace Vta.ViewModels
{
    public static class DropdownGenerator
    {
        public static List<DropdownViewModel> ToDropdownList(this IQueryable<Course> models)
        {
            return models.Select(x => new DropdownViewModel() {Id = x.Id, Name = x.Name}).ToList();
        }
        public static List<DropdownViewModel> ToDropdownList(this IQueryable<Level> models)
        {
            return models.Select(x => new DropdownViewModel() { Id = x.Id, Name = x.Name }).ToList();
        }
        public static List<DropdownViewModel> ToDropdownList(this IQueryable<Content> models)
        {
            return models.Select(x => new DropdownViewModel() { Id = x.Id, Name = x.Name }).ToList();
        }
        public static List<DropdownViewModel> ToDropdownList(this IQueryable<Question> models)
        {
            return models.Select(x => new DropdownViewModel() { Id = x.Id, Name = x.Name }).ToList();
        }
    }
}