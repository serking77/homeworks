function consoleRec (arg) {
    var i = 0;

    function recursile (i) {
    	if (i < arg.length) {
        console.log(arg[i]);
    	i = i+1;
        recursile(i);
        }
    }
    recursile(i);
}

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции']);
module.exports = {consoleRec};
