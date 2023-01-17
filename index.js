// Write your solution in this file!
const employee = {
    name: "John Smith",
    streetAddress: "123 Main Street" 
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]:value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]= value
    return obj
}

function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}