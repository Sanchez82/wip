using System.Collections.Generic;

namespace Wip.Core.Models
{
    public class Teacher
    {
        public int Id { get; set; }
        public User TeacherUser { get; set; }
        public ICollection<Lesson> Lessons { get; set; }

    }
}
