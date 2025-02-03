namespace ETicaretAPI.Application.Abstractions.Storage
{
    public interface IStoreageService : IStorage
    {
        public string StorageName { get; }  
    }
}
