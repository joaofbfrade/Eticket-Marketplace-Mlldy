namespace WebApplication3.Settings
{
    public class MongoDbConfig
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string ConnectionString => $"mongodb+srv://{Name}:{Password}@cluster0.wdfq4ff.mongodb.net/?retryWrites=true&w=majority";
    }
}
