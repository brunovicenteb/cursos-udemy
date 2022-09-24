using Dapper;
using System.Data;
using DapperDemo.Models;
using Microsoft.Data.SqlClient;

namespace DapperDemo.Repository;

public class CompanyRepository : ICompanyRepository
{
    private readonly IDbConnection _db;

    public CompanyRepository(IConfiguration configuration)
    {
        _db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
    }

    public Company Add(Company company)
    {
        var sql = "INSERT INTO Companies (Name, Address, City, State, PostalCode) VALUES (@Name, @Address, @City, @State, @PostalCode);"
            + "SELECT CAST(SCOPE_IDENTITY() as int);";
        var id = _db.Query<int>(sql, new
        {
            company.Name,
            company.Address,
            company.City,
            company.State,
            company.PostalCode
        }).Single();
        return Find(id);
    }

    public Company Find(int id)
    {
        var sql = "SELECT * FROM Companies where CompanyId = @CompanyId";
        return _db.Query<Company>(sql, new { @CompanyId = id }).Single();
    }

    public List<Company> GetAll()
    {
        var sql = "SELECT * FROM Companies";
        return _db.Query<Company>(sql).ToList();
    }

    public void Remove(int id)
    {
        var sql = "DELETE FROM Companies WHERE CompanyId = @id";
        _db.Execute(sql, new { id });
    }

    public Company Update(Company company)
    {
        var sql = "UPDATE Companies SET Name = @Name, Address = @Address, City = @City, State = @State, PostalCode = @PostalCode " +
            "WHERE CompanyId = @CompanyId";
        _db.Execute(sql, company);
        return Find(company.CompanyId);
    }
}