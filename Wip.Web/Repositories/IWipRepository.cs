using System.Collections.Generic;
using Wip.Core.Models;
using Wip.Web.DBContext;

namespace Wip.Web.Repositories
{
    public interface IWipRepository
    {
        WipContext _context { get; set; }

        List<User> GetAllUsers();
        List<Lesson> GetTeacherLessons(int teacherId);
        User GetUserById(int userId);
    }
}