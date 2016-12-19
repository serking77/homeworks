var Model = {
    login: function(appId, perms) {
        return new Promise(function(resolve, reject) {
            VK.init({
                apiId: appId
            });

            VK.Auth.login(function(response) {
                if (response.session) {
                    resolve(response);
                } else {
                    reject(new Error('Не удалось авторизоваться'));
                }
            }, perms);
        });
    },
    callApi: function(method, params) {
        return new Promise(function(resolve, reject) {
            VK.api(method, params, function(response) {
                if (response.error) {
                    reject(new Error(response.error.error_msg));
                } else {
                    resolve(response.response);
                }
            });
        });
    },
    getUser: function() {
        return this.callApi('users.get', { name_case: 'gen' });
    },
    getMusic: function() {
        return this.callApi('audio.get', {});
    },
    getFriends: function() {
        return this.callApi('friends.get', { fields: 'photo_100' });
    },
    getNews: function() {
        return this.callApi('newsfeed.get', { filters: 'post', count: 20 });
    },
    getGroups: function() {
        return this.callApi('groups.get', { extended: 1, fields: "name, photo_100", v: '5.60' });
    },
    getPhotos: function() {
        return this.callApi('photos.getAll', { extended: 1, v: '5.60' });
    },
    getComments: function() {
        return this.callApi('photos.getAllComments', { extended: 1, v: '5.60' });
    },
    getPhotosAll: function() {
        var photosArray;
        return Model.getPhotos()
            .then(function(photos) {
                photosArray = photos.items;
                return Model.getComments();
            })
            .then(function(comments) {
                photosArray.forEach(function(photo, i, arr) {
                    var commentsArray = comments.items.filter(function(comment, i, arr) {
                        return photo.id === comment.pid;
                    });
                    photo.commentsCount = commentsArray.length;
                });
                return photosArray;
            });
    },
};
