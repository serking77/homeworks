/*Создаем промис*/
var promiseAjax = new Promise(function(resolve, reject) {
    /*Выполняем ассинхронную операцию*/
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', false);
    xhr.send();
    if (xhr.status === 200) {
        resolve(xhr);
    } else {
        reject();
    }
});

promiseAjax.then(function(xhr) {
    /*Парсим полученый JSON*/
    var result = JSON.parse(xhr.responseText);
    /*Сортируем по алфавиту*/
    result = result.sort(function(a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });
    /*Выводим результат*/
    var cities = '';
    for (var i = 0; i < result.length; i++) {
        cities = cities + result[i].name + '<br />';

    }
    var resultString = '<p>Список городов по алфавиту</p><p>' + cities + '</p>';
    var newDiv = document.createElement('div');
    newDiv.innerHTML = resultString;
    document.body.appendChild(newDiv);
}, function() {
    var errMesg = "Что-то пошло не так";
    alert(errMesg);
});
