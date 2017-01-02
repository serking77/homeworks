var Controller = require('./controller.js');

var Router = {
    handle: function(route) {
        var routeName = route + 'Route';

        Controller[routeName]();
        
    }
};

module.exports = Router;
