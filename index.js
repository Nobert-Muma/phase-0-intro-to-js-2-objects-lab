// Write your solution in this file!
let employee={
    name:"Nobert Muma",
    streetAddress:"15375 Mbagathi"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    for (const key in employee) {
        delete employee[key];
    }
    const copyOfEmployee={...employee};
    copyOfEmployee.name='Sam';
    copyOfEmployee.streetAddress='11 Broadway';
    return copyOfEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    for (const key in employee) {
        delete employee[key];
    }
    employee.name="Sam";
    employee.streetAddress="12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;   
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}
