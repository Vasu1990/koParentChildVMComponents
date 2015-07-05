using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace KoComponentsParentChildPOC.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Index/

        public ActionResult Index()
        {
            Employee model = new Employee();
            model.Emp = new EmployeeModel();

            model.Emp.Name = "Vasu";
            model.Emp.Age = 24;
            model.Emp.Designation = "Developer";
            model.Role = WebConfigurationManager.AppSettings["Role"].ToString(); 
            return View(model);
        }

    }

}

public class Employee
{
    public EmployeeModel Emp { get; set; }
    public string Role { get; set; }
}

public class EmployeeModel
{
    public string Name { get; set; }
    public int Age { get; set; }
    public string Designation { get; set; }
}