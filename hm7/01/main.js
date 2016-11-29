//Выбираем div-контейнер для дальнейшей работы
var container = document.getElementById('container');


function creatCellsTable() {
    //Функция формирующая центральную часть таблицы

    var string = document.cookie;
    //Преобразуем строку cookie в объект
    string = string.split(';');
    var newObj = {};
    var newArr = [];
    for (var i = 0; i < string.length; i++) {
        var newArr = string[i].split('=');
        newObj[newArr[0].trim()] = newArr[1];
    }
    //Сформируем центральную часть таблицы
    var obj = newObj;
    var tdString = '';
    var inc = 0;
    for (key in obj) {
        var tdString = tdString + '<tr><td>' + key + '</td><td>' + obj[key] + '</td><td><button name="' + key + '" value ="' + obj[key] + '">Удалить</button></td></tr>';
        inc++;
    }
    var tableTdString = '<tr><th>имя</th><th>значение</th><th></th></tr>' + tdString;

    return tableTdString;
}




//Создаем таблицу для куки

//Получаем строку с центральной частью
var tdCells = creatCellsTable();

var table = document.createElement('table');
table.innerHTML = tdCells;
container.appendChild(table);


//реализуем функционал работы с кнопками

container.addEventListener('click', function(e) {
    //спрашиваем пользователя
    if (confirm("Удалить cookie с именем " + e.target.name + "?")) {
        //удаляем соответствующую куку
        var date = new Date(0);
        document.cookie = e.target.name + "=; expires=" + date.toUTCString();
    }
    //удаляем таблицу
    container.removeChild(document.querySelector('table'));
    //пересоздаем таблицу
    var tdCells = creatCellsTable();
    var table = document.createElement('table');
    table.innerHTML = tdCells;
    container.appendChild(table);
})
