using Dapper;
using System.Data;
using DapperDemo.Models;
using Microsoft.Data.SqlClient;
using Dapper.Contrib.Extensions;

namespace DapperDemo.Repository;

public class CompanyRepositoryContrib : ICompanyRepository
{
    private readonly IDbConnection _db;

    public CompanyRepositoryContrib(IConfiguration configuration)
    {
        _db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
    }

    public Company Add(Company company)
    {
        var id = (int)_db.Insert(company);
        return Find(id);
    }

    public Company Find(int id)
    {
        return _db.Get<Company>(id);
    }

    public List<Company> GetAll()
    {
        return _db.GetAll<Company>().ToList();
    }

    public void Remove(int id)
    {
        _db.Delete(new Company() { CompanyId = id });
    }

    public Company Update(Company company)
    {
        _db.Update(company);
        return Find(company.CompanyId);
    }
}