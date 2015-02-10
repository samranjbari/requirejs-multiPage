# requirejs-multiPage
requirejs setup in a non-single page app.
    
    <p>app.js is the entry point for the application</p>
    <p>wait for the app.js to get loaded and then execute the views/home.js</p>
    require(['/app/app.js'], function(app) {
        app.run('views/home');
    });
