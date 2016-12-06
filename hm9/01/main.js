//Данные будем хранить в localStorage
var storage = localStorage;

new Promise(function(resolve) {
    if (document.readyState == 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(function() {
    return new Promise(function(resolve, reject) {
        VK.init({
            apiId: 5753908
        });
        VK.Auth.login(function(response) {
            if (response.session) {
                resolve();
            } else {
                reject(new Error('Не удалось авторизоваться'));
            }
        }, 2);
    });
}).then(function() {
    return new Promise(function(resolve, reject) {
        VK.api('friends.get', { fields: "bdate, nickname, photo_50", v: '5.60' }, function(serverAnswer) {
            var arrFriends = serverAnswer.response.items;
            if (serverAnswer.error) {
                reject(new Error(serverAnswer.error.error_msg));
            } else {
                resolve(arrFriends);
            }
        });
    });
}).then(function(arrFriends) {
    //выводим список друзей
    if (storage.allFriends && storage.selectedFriends) {
        //Загружаем данные из localStorage
        left.innerHTML = storage.allFriends;
        right.innerHTML = storage.selectedFriends;
    } else {
        //Формируем данные посредством шаблонизатора
        var source = friendsItemTemplate.innerHTML;
        var templateFn = Handlebars.compile(source);
        left.innerHTML = templateFn({ list: arrFriends });
    }

    //обработчик поиска в полном списке друзей

    input1.addEventListener('keyup', function(event) {
        event.preventDefault();
        var value = event.target.value;
        var allDivInLeft = document.querySelectorAll('#left .iteminfo');

        function searchKey(fullname, value) {
            //функция ищет совпадения бкув в полном имени друга
            if (fullname.indexOf(value) != -1) {
                return true;
            } else {
                return false;
            }
        };

        for (var el of allDivInLeft) {
            el.className = 'iteminfo hidden';
        }

        for (var el of allDivInLeft) {
            var fullname = el.dataset.fullname;
            if (searchKey(fullname, value)) {
                el.className = 'iteminfo';
            }
        }
    });

    //обработчик поиска в списке выбранных друзей

    input2.addEventListener('keyup', function(event) {
        event.preventDefault();
        var value = event.target.value;
        var allDivInLeft = document.querySelectorAll('#right .iteminfo');

        function searchKey(fullname, value) {
            if (fullname.indexOf(value) != -1) {
                return true;
            } else {
                return false;
            }
        };

        for (var el of allDivInLeft) {
            el.className = 'iteminfo hidden';
        }

        for (var el of allDivInLeft) {
            var fullname = el.dataset.fullname;
            if (searchKey(fullname, value)) {
                el.className = 'iteminfo';
            }
        }
    });


    var handlerMouseDown = function(event) {
        var curDiv;
        event.preventDefault();
        if (event.target.id == 'left' || event.target.className == "add") {
            return;
        }
        if (event.target.className != "iteminfo") {
            curDiv = event.target.parentElement;
        } else {
            curDiv = event.target;
        }

        curDiv.className = 'iteminfo mobile_div';
        curDiv.style.left = event.pageX + 'px';
        curDiv.style.top = event.pageY + 'px';

        var handlerMouseMove = function(event) {
            curDiv.style.left = event.pageX + 'px';
            curDiv.style.top = event.pageY + 'px';
        };

        document.addEventListener('mousemove', handlerMouseMove);

        var handlerMouseUp = function(event) {
            curDiv.className = 'iteminfo';
            //скрываем выбранный элемент
            curDiv.setAttribute("style", "display: none");
            //клонируем выбранный элемент
            var curDiv2 = curDiv.cloneNode(true);
            curDiv2.setAttribute("style", "display: block");
            right.appendChild(curDiv2);
            right.scrollTop = right.scrollHeight;
            //меняем плюс на крестик
            var imgAdds = document.querySelectorAll('#right .add');
            for (var el of imgAdds) {
                el.src = 'img/remove.png';

            }
            right.removeEventListener('mouseup', handlerMouseUp);
        };
        right.addEventListener('mouseup', handlerMouseUp);
    };


    left.addEventListener('mousedown', handlerMouseDown);

    //обработчик клика по плюсику
    left.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.className == 'add') {
            var curDiv = event.target.parentElement;
            //скрываем выбранный элемент
            curDiv.setAttribute("style", "display: none");
            //клонируем выбранный элемент
            var curDiv2 = curDiv.cloneNode(true);

            curDiv2.setAttribute("style", "display: block");
            right.appendChild(curDiv2);
            right.scrollTop = right.scrollHeight;
            //меняем плюс на крестик
            var imgAdds = document.querySelectorAll('#right .add');
            for (var el of imgAdds) {
                el.src = 'img/remove.png';
            }
        }
    });

    //обработчик клика по крестику
    right.addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.className == 'add') {
            var curDiv = event.target.parentElement;
            right.removeChild(curDiv);
            //Делаем видимым элемент в левом списке
            var allDivInLeft = document.querySelectorAll('#left .iteminfo');
            for (var el of allDivInLeft) {
                var fullname = el.dataset.fullname;
                if (fullname == event.target.parentElement.dataset.fullname) {
                    el.setAttribute("style", "display: block");
                }
            }
        }
    });


    button.addEventListener('click', function(event) {
        event.preventDefault();
        //проверяем не отфильтрован ли список
        if (!input2.value && !input2.value) {
            //сохраняем выбранный список
            storage.selectedFriends = right.innerHTML;
            //сохраняем общий список
            storage.allFriends = left.innerHTML;
        } else {
            //cбрасываем фильтрацию
            var allDivInRight = document.querySelectorAll('#right .iteminfo');
            for (var el of allDivInRight) {
                el.className = 'iteminfo';
            }

            var allDivInLeft = document.querySelectorAll('#left .iteminfo');
            for (var el of allDivInLeft) {
                el.className = 'iteminfo';
            }
            //сохраняем выбранный список
            storage.selectedFriends = right.innerHTML;
            //сохраняем общий список
            storage.allFriends = left.innerHTML;

        }
    });
}).catch(function(e) {
    alert(`Ошибка: ${e.message}`);
});
