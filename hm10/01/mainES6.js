"use strict";
class calculator {
    constructor(firstNumber) {
        this.firstNumber = firstNumber;
    }
    sum() {
        let summArg = 0;
        for (let i = 0; i < arguments.length; i++) {
            summArg += arguments[i];
        }
        return this.firstNumber + summArg;
    }
    dif() {
        let difArg = 0;
        for (let i = 0; i < arguments.length; i++) {
            difArg += arguments[i];
        }
        return this.firstNumber - difArg;

    }
    div() {
        let result;
        try {

            if (arguments[0] !== 0) {
                result = this.firstNumber / arguments[0];
            } else {
                throw new Error("Делить на ноль нельзя!");
            }

            for (let i = 1; i < arguments.length; i++) {

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
    }

    mul() {
        let result = this.firstNumber * arguments[0];

        for (let i = 1; i < arguments.length; i++) {
            result = result * arguments[i];
        }
        return result;
    }
}

let obj = new calculator(100);
console.log(obj.sum(1, 2, 3)); 
console.log(obj.dif(10, 20)); 
console.log(obj.div(2, 2)); 
console.log(obj.mul(2, 2)); 



class mySqlCalc extends calculator {
    constructor(firstNumber) {
        super(firstNumber);
    }

    sum() {
        let calc2 = super.sum.apply(this, arguments);
        return calc2 * calc2;
    }
    dif() {
        let calc2 = super.dif.apply(this, arguments);
        return calc2 * calc2;
    }
    div() {
        let calc2 = super.div.apply(this, arguments);
        return calc2 * calc2;
    }
    mul() {
        let calc2 = super.mul.apply(this, arguments);
        return calc2 * calc2;
    }

}

let SqlCalc = new mySqlCalc(100);
console.log(SqlCalc.sum(1, 2, 3)); //вернет 11 236 (100 + 1 + 2 + 3 = 106 * 106)
console.log(SqlCalc.dif(10, 20)); //вернет 4 900
console.log(SqlCalc.div(2, 2)); //вернет 625
console.log(SqlCalc.mul(2, 2)); //вернет 160 000
