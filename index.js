// Write your solution in this file!
const employee = {
    name: "John Smith",
    streetAddress: "123 Main St",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployeeWithKeyAndValue = {...employee}
    newEmployeeWithKeyAndValue[key] = value
    return newEmployeeWithKeyAndValue
}

const newEmployeeWithKeyAndValue = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "11 Broadway"
    )

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
    }

destructivelyDeleteFromEmployeeByKey(employee, "name")