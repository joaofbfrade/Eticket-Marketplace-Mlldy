using Microsoft.AspNetCore.Mvc;

namespace Mellody.WebApplication.Settings
{
    public class MoralisDbConfig
    {
        public string Port { get; set; }
        public string Host { get; set; }
        public string ConnectionString => $"mongodb://{Port}:{Host}";
    }
}
