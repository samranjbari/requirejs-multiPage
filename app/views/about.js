
define(['commons/log'], function(log) {

    function activate() {
        log.write('about started');
    }

    return {
        activate: activate
    }
});