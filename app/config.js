
define([], function () {

    var appVersion = 0.1;

    function init() {
        require.config({
            baseUrl: '/app',
            paths: {
                jquery: '/scripts/jquery-2.1.3',
                bootstrap: '/scripts/bootstrap'
            },
            shim: {
                'bootstrap': {
                    deps: ['jquery']
                }
            },
            urlArgs: "v=" + appVersion
        });
    }
    
    return {
        initialize: init
    }
});