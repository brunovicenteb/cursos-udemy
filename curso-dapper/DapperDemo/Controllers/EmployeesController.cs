using Microsoft.AspNetCore.Mvc;
using DapperDemo.Models;
using DapperDemo.Repository;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace DapperDemo.Controllers
{
    public class EmployeesController : Controller
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IEmployeeRepository _employeeRepository;
        private readonly IBonusRepository _bonusRepository;


        [BindProperty]
        public Employee Employee { get; set; }

        public EmployeesController(ICompanyRepository companyRepository,
            IEmployeeRepository employeeRepository, IBonusRepository bonusRepository)
        {
            _companyRepository = companyRepository;
            _employeeRepository = employeeRepository;
            _bonusRepository = bonusRepository;
        }

        public async Task<IActionResult> Index(int? companyId = null)
        {
            await Task.CompletedTask;
            List<Employee> employees = _bonusRepository.GetEmployeeWithCompany(companyId);
            return View(employees);
        }

        public async Task<IActionResult> Details(int? id)
        {
            await Task.CompletedTask;

            if (id == null)
            {
                return NotFound();
            }

            var company = _employeeRepository.Find(id.GetValueOrDefault());
            if (company == null)
            {
                return NotFound();
            }

            return View(company);
        }

        public IActionResult Create()
        {
            ViewBag.CompanyList = _companyRepository.GetAll().Select(o => new SelectListItem()
            {
                Text = o.Name,
                Value = o.CompanyId.ToString()
            });
            return View();
        }

        [HttpPost]
        [ActionName("Create")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> CreatePOST()
        {
            if (ModelState.IsValid)
            {
                await _employeeRepository.AddAsync(Employee);
                return RedirectToAction(nameof(Index));
            }
            return View(Employee);
        }

        // GET: Companies/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            await Task.CompletedTask;
            if (id == null)
            {
                return NotFound();
            }

            ViewBag.CompanyList = _companyRepository.GetAll().Select(o => new SelectListItem()
            {
                Text = o.Name,
                Value = o.CompanyId.ToString()
            });
            Employee = _employeeRepository.Find(id.GetValueOrDefault());
            if (Employee == null)
            {
                return NotFound();
            }
            return View(Employee);
        }

        // POST: Companies/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id)
        {
            await Task.CompletedTask;
            if (id != Employee.CompanyId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _employeeRepository.Update(Employee);
                return RedirectToAction(nameof(Index));
            }
            return View(Employee);
        }

        // GET: Companies/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            await Task.CompletedTask;
            if (id == null)
            {
                return NotFound();
            }
            _employeeRepository.Remove(id.GetValueOrDefault());
            return RedirectToAction(nameof(Index));
        }
    }
}