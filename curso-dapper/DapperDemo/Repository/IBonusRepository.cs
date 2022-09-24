using DapperDemo.Models;

namespace DapperDemo.Repository;

public interface IBonusRepository
{
    List<Employee> GetEmployeeWithCompany(int? companyId = null);

    Company GetCompanyWithEmployees(int companyId);

    List<Company> GetAllCompanyWithEmployees();

    void AddTestCompanyWithEmployees(Company company);

    void AddTestCompanyWithEmployeesTransaction(Company company);
  

    void RemoveRange(int[] companyId);

    List<Company> FilterCompanyByName(string name);
}