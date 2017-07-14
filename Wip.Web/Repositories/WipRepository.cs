using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wip.Core.Models;
using Wip.Web.DBContext;

namespace Wip.Web.Repositories
{
    public class WipRepository : IWipRepository
    {
        public WipContext _context { get; set; }

        public WipRepository(WipContext context)
        {
            _context = context;
        }
        public List<User> GetAllUsers() {
            return _context.Users.ToList();
        }
        public User GetUserById(int userId)
        {
            return _context.Users.FirstOrDefault(u => u.Id == userId);
        }
        public List<Lesson> GetTeacherLessons(int teacherId) {
            return _context.Teachers.FirstOrDefault(t => t.Id == teacherId).Lessons.ToList();
        }
    }
}
