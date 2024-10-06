using ETicaretAPI.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Repositories
{
    public interface IRepository<T> where T : BaseEntity
    {
        Microsoft.EntityFrameworkCore.DbSet<T> Table { get; }
    }
}
