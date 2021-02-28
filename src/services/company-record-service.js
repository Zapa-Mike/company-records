export default class CompanyRecordService {
  constructor() {
    this.companies = [];
    this.employees = [];
  }
  loadCompanies() {
    fetch("http://laravel.development/companies/all")
      .then((res) => res.json())
      .then((data) => (this.companies = data));
  }
  getEmployeesByCompanyId(companyId) {
    fetch("http://laravel.development/companies/" + companyId + "/employees")
      .then((res) => res.json())
      .then((data) => (this.employees = data));
  }
  async addEmployee(companyId, employee) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    };
    return fetch(
      "http://laravel.development/companies/" + companyId + "/addEmployee",
      requestOptions
    );
  }
}
