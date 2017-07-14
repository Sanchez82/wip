using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Wip.Core.Models;
using Wip.Web.DBContext;

namespace Wip.Web.Repositories
{
    public class MockWipRespository : IWipRepository
    {
        public WipContext _context { get; set; }

        public MockWipRespository(WipContext context)
        {
            _context = context;
        }
        List<User> IWipRepository.GetAllUsers()
        {
            return _context.Users.ToList();
        }
        List<Lesson> IWipRepository.GetTeacherLessons(int teacherId)
        {
            return _context.Teachers.FirstOrDefault(t => t.Id == teacherId).Lessons.ToList();
        }
        User IWipRepository.GetUserById(int userId)
        {
            return _context.Users.FirstOrDefault(u => u.Id == userId);
        }
    }
}
