using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.IO;
using Wip.Core.Models;
using Wip.Web.DBContext;
using Wip.Web;
using Wip.Web.Repositories;

namespace Wip
{
    public class Startup
    {
        public IConfigurationRoot Config { get; set; }
        public Startup()
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
           .AddJsonFile("appsettings.json");

            Config = builder.Build();
        }
       
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var connection = Config["DefaultConnection"];
            //Adding configuration object to the DI Service
            services.AddSingleton(provider => Config);

            //Init WipContext to the DI Service
            services.AddEntityFrameworkSqlServer().
                AddDbContext<WipContext>( options => options.UseSqlServer(connection));

            //Adding WipContextSeed to the DI Service
            services.AddTransient<WipContextSeed>();

            //Adding Repositories
            services.AddScoped<IWipRepository, WipRepository>();
            //Mock for test cases
            //services.AddScoped<IWipRepository, MockWipRespository>();

            //Adding Mvc
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, 
            IHostingEnvironment env, 
            ILoggerFactory loggerFactory,
            WipContextSeed dataSeeder)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 &&
                   !Path.HasExtension(context.Request.Path.Value) &&
                   !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/error.html";
                    await next();
                }
            });

            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            dataSeeder.SeedUser().Wait();
        }
    }
}
