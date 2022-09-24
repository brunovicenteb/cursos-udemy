using DapperDemo.Data;
using DapperDemo.Models;

namespace DapperDemo.Repository;

public class CompanyRepositoryEF : ICompanyRepository
{
    private readonly ApplicationDbContext _db;

    public CompanyRepositoryEF(ApplicationDbContext db)
    {
        _db = db;
    }
    public Company Add(Company company)
    {
        _db.Add(company);
        _db.SaveChanges();
        return company;
    }

    public Company Find(int id)
    {
        return _db.Companies.FirstOrDefault(o => o.CompanyId == id);
    }

    public List<Company> GetAll()
    {
        return _db.Companies.ToList();
    }

    public void Remove(int id)
    {
        var company = Find(id);
        _db.Remove(company);
        _db.SaveChanges();
    }

    public Company Update(Company company)
    {
        _db.Update(company);
        _db.SaveChanges();
        return company;
    }
}