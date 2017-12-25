// Write your solution in this file!
let driver={};
 function updateDriverWithKeyAndValue(driver, key, value){
   let newDriver=Object.assign({}, driver, {[key]: value});
   return newDriver;
 }
 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   Object.assign(driver, {[key]: value});
   return driver;
 }
 function deleteFromDriverByKey(driver, key){
   let newDriver=Object.assign({}, driver);
   delete newDriver[key];
   return newDriver;
 }
 function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver[key];
   return driver;
<<<<<<< HEAD
 }
=======
 }
>>>>>>> 08ac6c00ce68c2191f95240179e3b44418d90451
