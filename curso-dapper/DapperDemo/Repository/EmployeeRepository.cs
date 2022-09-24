using Dapper;
using System.Data;
using DapperDemo.Models;
using Microsoft.Data.SqlClient;

namespace DapperDemo.Repository;

public class EmployeeRepository : IEmployeeRepository
{
    private readonly IDbConnection _db;

    public EmployeeRepository(IConfiguration configuration)
    {
        _db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
    }

    public Employee Add(Employee employee)
    {
        var sql = "INSERT INTO Employees (Name, Email, Phone, Title, CompanyId) VALUES (@Name, @Email, @Phone, @Title, @CompanyId);"
            + "SELECT CAST(SCOPE_IDENTITY() as int);";
        var id = _db.Query<int>(sql, employee).Single();
        return Find(id);
    }

    public async Task<Employee> AddAsync(Employee employee)
    {
        var sql = "INSERT INTO Employees (Name, Email, Phone, Title, CompanyId) VALUES (@Name, @Email, @Phone, @Title, @CompanyId);"
            + "SELECT CAST(SCOPE_IDENTITY() as int);";
        var id = await _db.QueryAsync<int>(sql, employee);
        return Find(id.Single());
    }

    public Employee Find(int id)
    {
        var sql = "SELECT * FROM Employees where EmployeeId = @EmployeeId";
        return _db.Query<Employee>(sql, new { @EmployeeId = id }).Single();
    }

    public List<Employee> GetAll()
    {
        var sql = "SELECT * FROM Employees";
        return _db.Query<Employee>(sql).ToList();
    }

    public void Remove(int id)
    {
        var sql = "DELETE FROM Employees WHERE EmployeeId = @id";
        _db.Execute(sql, new { id });
    }

    public Employee Update(Employee Employee)
    {
        var sql = "UPDATE Employees SET Name = @Name, Email = @Email, Phone = @Phone, Title = @Title, CompanyId = @CompanyId " +
            "WHERE EmployeeId = @EmployeeId";
        _db.Execute(sql, Employee);
        return Find(Employee.EmployeeId);
    }
}