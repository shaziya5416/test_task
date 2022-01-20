const lodash = require("lodash");

const moment = require("moment");


//Print Date or Time in the following format:
console.log("Current Date and Time: " + moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log("Current Day: " + moment().format('dddd'));
console.log("Current Date: " + moment().format("MMM Do YY"));


//Check if the following date is valid or not:
var date1 = moment("2020-01-01");
console.log("Date 2020-01-01 is valid: " + date1.isValid());

var date2 = moment("2020-14-01");
console.log("Date 2020-14-01 is valid: " + date2.isValid());


//Manipulating Dates
console.log("Adding 7 days: " + moment().add(7, 'days').calendar());
console.log("Adding 7 months: " + moment().add(7, 'months').calendar());
console.log("Adding 7 years: " + moment().add(7, 'years').calendar());
console.log("Subtracting 7 days: " + moment().subtract(7, 'days').calendar());
console.log("Subtracting 7 months: " + moment().subtract(7, 'months').calendar());
console.log("Subtracting 7 years: " + moment().subtract(7, 'years').calendar());



//Find the difference between the following 2 dates:
var a = moment([2014-11-11]);
var b = moment([2015-09-11]);
console.log("Difference between dates: " + b.diff(a, 'days'));

var a = moment([2014-11-27]);
var b = moment([2015-09-16]);
console.log("Difference between dates: " + b.diff(a, 'days'));

console.log("Is the date after: " + moment('2020-01-01').isAfter('2018-01-01'));
console.log("Is the date after: " + moment('2010-01-01').isAfter('2018-01-01'));

console.log("Is 2019 leap year: " + moment([2019]).isLeapYear());
console.log("Is 2020 leap year: " + moment([2020]).isLeapYear());


//Use lodash to do the following things:
//Array Methods
console.log("Using drop method: " + lodash.drop([1, 2, 3, 4, 5, 6], 2));
console.log("Using flattenDeep method: " + lodash.flattenDeep([1, [2, [3, [4]], 5]]));
console.log("Using chunk method: " + lodash.chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'], 3));
console.log("Using difference method: " + lodash.difference([2, 1], [2, 3]));
console.log("Using head method: " + lodash.head([1, 2, 3]));


//Collection Methods
console.log("Using countBy method: " + lodash.countBy([6.1, 4.2, 6.3], Math.floor));
console.log("Using includes method: " + lodash.includes([1, 2, 3], 1));
console.log("Using invokeMap method: " + lodash.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));
console.log("Using shuffle method: " + lodash.shuffle([1, 2, 3, 4]));
console.log("Using size method: " + lodash.size('pebbles'));