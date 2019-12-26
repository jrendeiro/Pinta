using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting;
using PintaAPI.Data;
using PintaAPI.Models;

namespace PintaAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // CreateWebHostBuilder(args).Build().Run();
            CreateHostBuilder(args).Build().Run();

            // using (var ctx = new DataContext())
            // {
            //     var place = new Place() { Name = "Bodeguita" };
        
            //     ctx.Places.Add(place);
            //     ctx.SaveChanges();                
            // }
        }

    //     public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
    //         WebHost.CreateDefaultBuilder(args)
    //             .UseStartup<Startup>();
    // }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => 
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
