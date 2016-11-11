function consoleRec (arg, i) {

    	if (i < arg.length) {
        console.log(arg[i]);
    	i = i+1;
        consoleRec (arg, i);
        }
}

consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);

module.exports = {consoleRec};