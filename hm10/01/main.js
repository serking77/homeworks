var calculator = function(firstNumber) {
    this.firstNumber = firstNumber;
}

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

            try {

                if (arguments[0] !== 0) {
                    var result = this.firstNumber / arguments[0];
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
        };

calculator.prototype.mul = function() {
            var result = this.firstNumber * arguments[0];

            for (var i = 1; i < arguments.length; i++) {
                result = result * arguments[i]
            }
            return result;
        };

var myCalculator = new calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106

console.log(myCalculator.dif(10, 20)); //вернет 70

console.log(myCalculator.div(2, 2)); //вернет 25

console.log(myCalculator.mul(2, 2)); //вернет 400*/


