using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Wip.Web
{
    public class WipOptions
    {
        public string DefaultConnection { get; set; }
        public WipOptions()
        {
            // Set default value.
            DefaultConnection = "Server=(localdb)\\MSSQLLocalDB;Database=_CHANGE_ME;Trusted_Connection=True;MultipleActiveResultSets=true";
        }

    }
}
