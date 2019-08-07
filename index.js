const driver = {
    name: 'Sam',
    address: '11 Broadway',
}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const newDriver = {...driver};
    delete newDriver[key];
    return newDriver
}


function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}
