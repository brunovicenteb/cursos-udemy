using Dapper;
using System.Data;
using DapperDemo.Models;
using Microsoft.Data.SqlClient;

namespace DapperDemo.Repository;

public class CompanyRepositorySP : ICompanyRepository
{
    private readonly IDbConnection _db;

    public CompanyRepositorySP(IConfiguration configuration)
    {
        _db = new SqlConnection(configuration.GetConnectionString("DefaultConnection"));
    }

    public Company Add(Company company)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@CompanyId", dbType: DbType.Int32, direction: ParameterDirection.Output);
        parameters.Add("@Name", company.Name, dbType: DbType.String);
        parameters.Add("@Address", company.Address, dbType: DbType.String);
        parameters.Add("@City", company.City, dbType: DbType.String);
        parameters.Add("@State", company.State, dbType: DbType.String);
        parameters.Add("@PostalCode", company.PostalCode, dbType: DbType.String);
        _db.Execute("usp_AddCompany", parameters, commandType: CommandType.StoredProcedure);
        var companyId = parameters.Get<int>("CompanyId");
        return Find(companyId);
    }

    public Company Find(int id)
    {
        return _db.Query<Company>("usp_GetCompany", new { CompanyId = id }, commandType: CommandType.StoredProcedure)
            .SingleOrDefault();
    }

    public List<Company> GetAll()
    {
        return _db.Query<Company>("usp_GetALLCompany", commandType: CommandType.StoredProcedure).ToList();
    }

    public void Remove(int id)
    {
        _db.Query<Company>("usp_RemoveCompany", new { CompanyId = id }, commandType: CommandType.StoredProcedure).ToList();
    }

    public Company Update(Company company)
    {
        var parameters = new DynamicParameters();
        parameters.Add("@CompanyId", company.CompanyId, DbType.Int32);
        parameters.Add("@Name", company.Name, dbType: DbType.String);
        parameters.Add("@Address", company.Address, dbType: DbType.String);
        parameters.Add("@City", company.City, dbType: DbType.String);
        parameters.Add("@State", company.State, dbType: DbType.String);
        parameters.Add("@PostalCode", company.PostalCode, dbType: DbType.String);
        _db.Execute("usp_UpdateCompany", parameters, commandType: CommandType.StoredProcedure);
        return Find(company.CompanyId);
    }
}