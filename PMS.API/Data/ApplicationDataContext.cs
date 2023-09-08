using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PMS.API.Models;

namespace PMS.API.Data
{
    public class ApplicationDataContext : DbContext
    {
        public ApplicationDataContext (DbContextOptions<ApplicationDataContext> options)
            : base(options)
        {
        }

        public DbSet<PMS.API.Models.Product> Product { get; set; } = default!;
    }
}
