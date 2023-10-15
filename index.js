// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
//   // Testing the functions
//   console.log('Original Employee:', employee);
  
//   const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'name', 'Alice');
//   console.log('Updated Employee (non-destructive):', updatedEmployee);
  
//   console.log('Original Employee (after non-destructive update):', employee);
  
//   destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St');
//   console.log('Original Employee (after destructive update):', employee);
  
//   const employeeWithoutName = deleteFromEmployeeByKey(employee, 'name');
//   console.log('Employee without Name (non-destructive):', employeeWithoutName);
  
//   console.log('Original Employee (after non-destructive deletion):', employee);
  
//   destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
//   console.log('Original Employee (after destructive deletion):', employee);
  