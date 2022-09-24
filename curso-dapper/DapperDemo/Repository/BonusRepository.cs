using System.ComponentModel.Design;
using System.Data;
using System.Transactions;
using Dapper;
using DapperDemo.Models;
using Microsoft.Data.SqlClient;

namespace DapperDemo.Repository;

public class BonusRepository : IBonusRepository
{
    private readonly IDbConnection _db;

    public BonusRepository(IConfiguration configuration)
    {
        _db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
    }

    public void AddTestCompanyWithEmployees(Company company)
    {
        var sql = "INSERT INTO Companies (Name, Address, City, State, PostalCode) VALUES (@Name, @Address, @City, @State, @PostalCode);"
                    + "SELECT CAST(SCOPE_IDENTITY() as int);";
        company.CompanyId = _db.Query<int>(sql, company).Single();
        company.Employees.ForEach(o => o.CompanyId = company.CompanyId);
        var sqlEmp = "INSERT INTO Employees (Name, Email, Phone, Title, CompanyId) VALUES (@Name, @Email, @Phone, @Title, @CompanyId);"
             + "SELECT CAST(SCOPE_IDENTITY() as int);";
        _db.Execute(sqlEmp, company.Employees);
    }

    public void AddTestCompanyWithEmployeesTransaction(Company company)
    {
        using (var transaction = new TransactionScope())
        {
            try
            {
                var sql = "INSERT INTO Companies (Name, Address, City, State, PostalCode) VALUES (@Name, @Address, @City, @State, @PostalCode);"
                            + "SELECT CAST(SCOPE_IDENTITY() as int);";
                company.CompanyId = _db.Query<int>(sql, company).Single();
                company.Employees.ForEach(o => o.CompanyId = company.CompanyId);
                var sqlEmp = "INSERT INTO Employees (Name, Email, Phone, Title, CompanyId) VALUES (@Name, @Email, @Phone, @Title, @CompanyId);"
                     + "SELECT CAST(SCOPE_IDENTITY() as int);";
                _db.Execute(sqlEmp, company.Employees);
                transaction.Complete();
            }
            catch (Exception)
            {
                throw;
            }
        }
    }

    public List<Company> GetAllCompanyWithEmployees()
    {
        var sql = "SELECT C.*, E.* FROM Companies AS C INNER JOIN Employees AS E ON C.CompanyId = E.CompanyId";
        var companyDic = new Dictionary<int, Company>();
        var company = _db.Query<Company, Employee, Company>(sql, (c, e) =>
        {
            if (!companyDic.TryGetValue(c.CompanyId, out var currentCompany))
            {
                currentCompany = c;
                companyDic.Add(c.CompanyId, currentCompany);
            }
            currentCompany.Employees.Add(e);
            return currentCompany;
        }, splitOn: "EmployeeId");
        return company.Distinct().ToList();
    }

    public Company GetCompanyWithEmployees(int companyId)
    {
        var sql = "SELECT * FROM Companies WHERE CompanyId = @CompanyId;";
        sql += "SELECT * FROM Employees WHERE CompanyId = @CompanyId;";
        using var lists = _db.QueryMultiple(sql, new { CompanyId = companyId });
        Company company = lists.Read<Company>().ToList().FirstOrDefault();
        if (company != null)
            company.Employees = lists.Read<Employee>().ToList();
        return company;
    }

    public List<Employee> GetEmployeeWithCompany(int? companyId = null)
    {
        var sql = "SELECT E.*, C.Name FROM Employees AS E INNER JOIN Companies AS C ON E.CompanyId = C.CompanyId";
        if (companyId.HasValue)
            sql += " WHERE E.CompanyId = @companyId";
        var employees = _db.Query<Employee, Company, Employee>(sql, (e, c) =>
        {
            e.Company = c;
            return e;
        }, new { companyId }, splitOn: "CompanyId").ToList();
        return employees;
    }

    public void RemoveRange(int[] companiesId)
    {
        _db.Query("DELETE FROM Companies WHERE CompanyId IN @companiesId", new { companiesId });
    }

    public List<Company> FilterCompanyByName(string name)
    {
        return _db.Query<Company>("SELECT * FROM Companies WHERE Name like '%' + @name + '%'", new { name }).ToList();
    }
}