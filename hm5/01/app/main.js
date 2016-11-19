'use strict';

let btn = document.querySelector('.btn');
let info = document.querySelector('.info');

btn.addEventListener('click', function() {
    info.classList.toggle('info--open')
}, false);
