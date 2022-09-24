using Microsoft.AspNetCore.Mvc;
using DapperDemo.Models;
using DapperDemo.Repository;

namespace DapperDemo.Controllers
{
    public class CompaniesController : Controller
    {
        private readonly ICompanyRepository _companyRepository;
        private readonly IBonusRepository _bonusRepository;

        public CompaniesController(ICompanyRepository companyRepository, IBonusRepository bonusRepository)
        {
            _companyRepository = companyRepository;
            _bonusRepository = bonusRepository;
        }

        // GET: Companies
        public async Task<IActionResult> Index()
        {
            await Task.CompletedTask;
            return View(_companyRepository.GetAll());
        }

        // GET: Companies/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            await Task.CompletedTask;

            if (id == null)
            {
                return NotFound();
            }

            var company = _bonusRepository.GetCompanyWithEmployees(id.GetValueOrDefault());
            if (company == null)
            {
                return NotFound();
            }

            return View(company);
        }

        // GET: Companies/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Companies/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("CompanyId,Name,Address,City,State,PostalCode")] Company company)
        {
            await Task.CompletedTask;
            if (ModelState.IsValid)
            {
                _companyRepository.Add(company);
                return RedirectToAction(nameof(Index));
            }
            return View(company);
        }

        // GET: Companies/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            await Task.CompletedTask;
            if (id == null)
            {
                return NotFound();
            }

            var company = _companyRepository.Find(id.GetValueOrDefault());
            if (company == null)
            {
                return NotFound();
            }
            return View(company);
        }

        // POST: Companies/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("CompanyId,Name,Address,City,State,PostalCode")] Company company)
        {
            await Task.CompletedTask;
            if (id != company.CompanyId)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                _companyRepository.Update(company);
                return RedirectToAction(nameof(Index));
            }
            return View(company);
        }

        // GET: Companies/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            await Task.CompletedTask;
            if (id == null)
            {
                return NotFound();
            }
            _companyRepository.Remove(id.GetValueOrDefault());
            return RedirectToAction(nameof(Index));
        }
    }
}