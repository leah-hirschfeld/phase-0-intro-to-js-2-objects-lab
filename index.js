const employee = {
    name: 'Leah',
    streetAddress: '123 Magic Rd'  };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = Object.assign(employee,{[key]: value});

    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
    delete employee[key]

    return employee
}   

function deleteFromEmployeeByKey(employee, key) {
    const newObj = { ...employee };

    delete newObj[key]

    return newObj
}   