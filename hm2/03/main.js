function calculator(firstNumber) {

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
console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));
