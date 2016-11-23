"use strict"

let array = [1, 2, 3, 4, 5, 6];
let array2 = ['ангел', 'клоун', 'мандарин', 'хирург', 'медик', 'медведь']; // для удобства восприятия

console.log("----Функция forEach-----");

function forEach(array, func) {

    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
}
forEach(array, item => console.log(item));

console.log("----Функция filter-----");

function filter(array, func) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i])) {
            result[result.length] = array[i];
        }
    }
    return result
}

let greaterThan4 = filter(array, item => item > 4);
console.log(greaterThan4);

console.log("----Функция map-----");

function map(array, func) {
    let result = [];
    for (var i = 0; i < array.length; i++) {
        result[result.length] = func(array[i]);
    }
    return result;

}

let sqare = map(array, item => item * item);
console.log(sqare);

console.log("----Функция splice-----");

function splice(array, start, deleteCount, item) {
    let result = [];
    let rangeOff = (start + deleteCount) - 1;
    for (var i = 0; i < array.length; i++) {
        if (i >= start && i <= rangeOff && item !== undefined && i === start) {
            result[result.length] = item;
        } else if (i >= start && i <= rangeOff && item !== undefined) {} else if (i == start && deleteCount === 0 && item !== undefined) {
            result[result.length] = item;
            result[result.length] = array[i];
        } else if (i >= start && deleteCount === 0 && item === undefined) {
            result[result.length] = array[i];
        } else {
            result[result.length] = array[i];
        }

    }
    return result
}

console.log(splice(array2, 2, 1, 'www'));

module.exports = { forEach, filter, map, splice };

