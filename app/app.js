
define(['/app/config.js'], function(config) {
    config.initialize();

    return {
        run: function(route) {
            require([route], function(view) {
                view.activate();
            });
        }
    }
});