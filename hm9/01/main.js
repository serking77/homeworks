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
            console.dir(serverAnswer);
            //выводим ответ
            var source = frendsItemTemplate.innerHTML;
            var templateFn = Handlebars.compile(source);
            var template = templateFn({ list: serverAnswer.response.items });

            left.innerHTML = template;

            if (serverAnswer.error) {
                reject(new Error(serverAnswer.error.error_msg));
            } else {


                resolve();
            }
        });
    });
}).catch(function(e) {
    alert(`Ошибка: ${e.message}`);
});

// обработчик друганд дропа
left.addEventListener ('click')
