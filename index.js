const employee = {
    name: 'Leah',
    streetAddress: '123 Magic Rd'  };

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };

    newObj[key] = value;

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, _streetAddress, value){
    const newObj = Object.assign(employee,{streetAddress: value});

    return newObj;
}

function deleteFromEmployeeByKey(employee, _key) {
    const newObj = { ...employee };
    
    delete employee._key

    return employee
}   