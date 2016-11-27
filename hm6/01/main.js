"use strict"

function timer(mic) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, mic);
    });
}
timer(3000).then(() => console.log('я вывелась через 3 секунды'))
