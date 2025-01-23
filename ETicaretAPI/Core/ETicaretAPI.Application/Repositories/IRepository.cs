using ETicaretAPI.Domain.Entities.Common;

namespace ETicaretAPI.Application.Repositories
{
    public interface IRepository<T> where T : BaseEntity
    {
        Microsoft.EntityFrameworkCore.DbSet<T> Table { get; }
    }
}
