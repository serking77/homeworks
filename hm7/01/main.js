
//console.log(document.cookie);

/*Создаем таблицу для куки*/
var cookie = document.cookie.split(';');

//console.dir(cookie);
var tdString = '';
for (var i = 0; i < cookie.length; i++) {
    var newarr = cookie[i].split('=');
    var tdString = tdString + '<tr><td>' + newarr[0].trim() + '</td><td>' + newarr[1].trim() + '</td><td><button id="butt">Удалить</button></td></tr>';
}

var tableTdString = '<tr><th>имя</th><th>значение</th><th></th></tr>' + tdString;
console.log(tableTdString);

var table = document.createElement('table'); 
table.innerHTML = tableTdString;
document.body.appendChild(table);

var butt = document.getElementById('butt');
butt.addEventListener('click', function(e) {
console.dir(e);
var x = confirm("Удалить cookie с именем …?");
 })

