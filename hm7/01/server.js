// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
    res.sendfile('index.html');
    res.cookie('_ga', 'GA.1.2.156.55666.55555788');
    res.cookie('_gat', '1');
    res.cookie('_gat_UA-56335599-5', '2');
    res.cookie('_ym_isad', '2');
});
app.get('/main.js', function(req, res) {
    res.sendfile('main.js');
});


// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');

