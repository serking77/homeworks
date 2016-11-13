"use strict"

let array = [1, 2, 3, 4, 5, 6];

console.log("----Функция forEach-----");

function forEach(array, func) {

    for (var i=0; i<array.length; i++) {
    	func(array[i]);
    }
}
forEach(array, item=>console.log(item));

console.log("----Функция filter-----");

function filter (array, func) {
      let result = [];
    for (var i=0; i<array.length; i++) {
    	if (func(array[i])) {
    	   result += array[i] + "\n";	
    	}
    }      
      return result;
}

let greaterThan4 = filter(array, item => item > 4);
console.log(greaterThan4);

console.log("----Функция map-----");

function map (array, func) {
      let result = [];
    for (var i=0; i<array.length; i++) {
    	result += func(array[i]) + "\n";	
    	}
      return result;

}

let sqare = map(array, item => item*item);
console.log(sqare);

module.exports = {forEach};
module.exports = {filter};
module.exports = {map};