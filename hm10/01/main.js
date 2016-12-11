var calculator = function(firstNumber) {
    this.firstNumber = firstNumber;
}

calculator.prototype.sum = function() {
        var summArg = 0;
        for (var i = 0; i < arguments.length; i++) {
            summArg += arguments[i];
        }
        return this.firstNumber + summArg;
    }

/*    this.sum = function() {
        var summArg = 0;
        for (var i = 0; i < arguments.length; i++) {
            summArg += arguments[i];
        }
        return firstNumber + summArg;
    }
*/







var obj = new calculator(100);
console.dir(obj);

console.log(obj.sum(1, 2, 3));













/*Написать функцию 'calculator', которая имеет один параметр - 'firstNumber'
- 'sum' - складывает 'firstNumber' с переданным аргументами
- 'dif' - вычитает из 'firstNumber' переданные аргументы
- 'div' - делит 'firstNumber' на первый переданный аргумент. Результат этой операции делится на второй переданный аргумент (если он есть) и так далее
- 'mul' - умножает 'firstNumber' на первый переданный аргумент. Результат этой операции умножается на второй переданный аргумент (если он есть) и так далее.
Предусмотреть исключительные ситуации, для функции 'div', когда делитель равен нулю
пример:
var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106

console.log(myCalculator.dif(10, 20)); //вернет 70

console.log(myCalculator.div(2, 2)); //вернет 25

console.log(myCalculator.mul(2, 2)); //вернет 400*/

/*function calculator(firstNumber) {

    var obj = {

        sum: function() {
            var summArg = 0;
            for (var i = 0; i < arguments.length; i++) {
                summArg += arguments[i];
            }
            return firstNumber + summArg;
        },
        dif: function() {
            var difArg = 0;
            for (var i = 0; i < arguments.length; i++) {
                difArg += arguments[i];
            }
            return firstNumber - difArg;

        },
        div: function() {

            try {

                if (arguments[0] !== 0) {
                    var result = firstNumber / arguments[0];
                } else {
                    throw new Error("Делить на ноль нельзя!")
                }

                for (var i = 1; i < arguments.length; i++) {

                    if (arguments[i] !== 0) {
                        result = result / arguments[i]
                    } else {
                        throw new Error("Делить на ноль нельзя!")
                    }

                }
                return result;
            } catch (err) {
                return err.message;
            }
        },

        mul: function() {
            var result = firstNumber * arguments[0];

            for (var i = 1; i < arguments.length; i++) {
                result = result * arguments[i]
            }
            return result;
        },

    }
    return obj;
}

var myCalculator = calculator(100);
console.log(calculator(100));
console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));
*/
