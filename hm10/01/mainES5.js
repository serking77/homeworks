"use strict";
var calculator = function(firstNumber) {
    this.firstNumber = firstNumber;
};
calculator.prototype.sum = function() {
    var summArg = 0;
    for (var i = 0; i < arguments.length; i++) {
        summArg += arguments[i];
    }
    return this.firstNumber + summArg;
};
calculator.prototype.dif = function() {
    var difArg = 0;
    for (var i = 0; i < arguments.length; i++) {
        difArg += arguments[i];
    }
    return this.firstNumber - difArg;

};
calculator.prototype.div = function() {
    var result;
    try {

        if (arguments[0] !== 0) {
            result = this.firstNumber / arguments[0];
        } else {
            throw new Error("Делить на ноль нельзя!");
        }

        for (var i = 1; i < arguments.length; i++) {

            if (arguments[i] !== 0) {
                result = result / arguments[i];
            } else {
                throw new Error("Делить на ноль нельзя!");
            }

        }
        return result;
    } catch (err) {
        return err.message;
    }
};

calculator.prototype.mul = function() {
    var result = this.firstNumber * arguments[0];

    for (var i = 1; i < arguments.length; i++) {
        result = result * arguments[i];
    }
    return result;
};


var mySqlCalc = function(firstNumber) {
    this.firstNumber = firstNumber;
};

function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
    child.prototype.parent = parent;
}

inherit(mySqlCalc, calculator);


mySqlCalc.prototype.sum = function() {
    var calc2 = this.parent.prototype.sum.apply(this, arguments);
    return calc2 * calc2;
};
mySqlCalc.prototype.dif = function() {
    var calc2 = this.parent.prototype.dif.apply(this, arguments);
    return calc2 * calc2;
};
mySqlCalc.prototype.div = function() {
    var calc2 = this.parent.prototype.div.apply(this, arguments);
    return calc2 * calc2;
};
mySqlCalc.prototype.mul = function() {
    var calc2 = this.parent.prototype.mul.apply(this, arguments);
    return calc2 * calc2;
};

new calculator(100);
var SqlCalc = new mySqlCalc(100);
console.log(SqlCalc.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(SqlCalc.dif(10, 20)); //вернет 4 900
console.log(SqlCalc.div(2, 2)); //вернет 625
console.log(SqlCalc.mul(2, 2)); //вернет 160 000
