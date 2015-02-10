
define([], function() {

    return {
        write: function(msg) {
            if (console && console.log) {
                console.log(new Date().getTime(), msg);
            }
        }
    }
});