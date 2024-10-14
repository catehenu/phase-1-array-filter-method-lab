function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}
function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string));
}
function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}
const drivers = ['Alice', 'Bob','Charlie','alice','ALICE'];
const driverObjects =[
    {name: 'Alice', hometown:'Wonderland'},
    {name: 'bob', hometown:'BuilderLand'},
    {name: 'Charlie', hometown:'Chicagoland'}
];
//Test findMatching
console.log(findMatching(drivers, 'Alice'));
//Test fuzzyMatch
console.log(fuzzyMatch(drivers, 'AL'));
//Test matchName
console.log(matchName(driverObjects, 'Bob'));