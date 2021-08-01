{
  function payroll(salaryBooks) {
    let employeesSalary = {};

    for (let salaryInfo of salaryBooks) {
      const [employee, salary, bank, account] = salaryInfo;
      let firstSalary = "";
      let secondSalary = "";

      for (let digit of salary) {
        if (digit !== ",") {
          if (digit === "3") {
            firstSalary += "2";
            secondSalary += "1";
          } else if (digit === "4") {
            firstSalary += "2";
            secondSalary += "2";
          } else if (digit === "6") {
            firstSalary += "5";
            secondSalary += "1";
          } else {
            firstSalary += digit;
            secondSalary += "0";
          }
        }
      }
      employeesSalary[employee] = { firstSalary: parseInt(firstSalary), secondSalary: parseInt(secondSalary), bank: bank, account: account };
    }

    return employeesSalary;
  }

  const salaryBooks = [
    ["이대표", "333,356,766", "S은행", "100-0000-0000-001"],
    ["최차장", "5,000,000", "S은행", "100-0000-0000-002"],
    ["이과장", "3,200,000", "S은행", "100-0000-0000-003"],
    ["홍팀장", "3,300,000", "S은행", "100-0000-0000-004"],
    ["이대리", "5,300,000", "S은행", "100-0000-0000-005"],
  ];
  console.log(payroll(salaryBooks));
}
