// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    //... using the spread operator to copy the original object (driver) into the new object (newDriver)
    const newDriver = {...driver};
    //then using the creating a new key/value pair for the new object
    newDriver[key] = value;
    // then returning the updated object
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    //updating the orignal object (driver) destructively is done by modifying the original properties. So 
    driver[key] = value;
    //returning the original object with the new update.
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    //creating a new object (otherDriver) assigning the empty object {} and providing the original object with its properties.
    // the new object can also be created like: const otherDriver = {...driver}; which does exactly the same thing!
    const otherDriver = Object.assign({}, driver);
    //returning the new object
    otherDriver;
    //deleting the cloned version of key from the original driver. For this new object.
    delete otherDriver[key];
    // now calling the updated new object (that deleted the cloned key), which will now be empty => {}
    return otherDriver;
    //calling the original object which will show the og properties.
    // driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}