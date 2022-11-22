namespace WebApplication3.Settings
{
    public class MongoDbConfig
    {
        public string Port { get; set; }
        public string Host { get; set; }
        //public string ConnectionString => $"mongodb+srv://{Name}:{Password}@cluster0.wdfq4ff.mongodb.net/?retryWrites=true&w=majority";
        public string ConnectionString => $"mongodb://{Port}:{Host}";
    }
}
