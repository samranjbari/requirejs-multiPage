# requirejs-multiPage
requirejs setup in a non-single page app.
    
    app.js is the entry point for the application
    wait for the app.js to get loaded and then execute the views/home.js
    require(['/app/app.js'], function(app) {
        app.run('views/home');
    });
