export default class CompanyRecordService {
  getCompanies() {
    return new MockService().getCompanies();
  }
  getEmployeesByCompanyId(companyId) {
    return new MockService().getEmployeesByCompanyId(companyId);
  }
}
class MockService {
  getCompanies() {
    return [
      {
        id: "0",
        name: "Company 0",
      },
      {
        id: "1",
        name: "Company 1",
      },
      {
        id: "2",
        name: "Company 2",
      },
      {
        id: "3",
        name: "Company 3",
      },
      {
        id: "4",
        name: "Company 4",
      },
      {
        id: "5",
        name: "Company 5",
      },
    ];
  }

  getEmployeesByCompanyId(companyId) {
    return [
      {
        id: "0",
        companyId: companyId,
        surname: "Employee 0",
        forename: "Mike",
        email: "email@example.org",
      },
      {
        id: "1",
        companyId: companyId,
        surname: "Employee 1",
        forename: "Martin",
        email: "email@example.org",
      },
    ];
  }
}

// class Company {
//   id;
//   name;
// }
// class Employee {
//   id;
//   companyId;
//   surname;
//   forename;
//   email;
// }
