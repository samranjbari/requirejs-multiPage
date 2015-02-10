
define(['commons/log', 'views/homeViewModel'], function(log, vm) {

    function activate() {
        log.write('home started');
        vm.dostuff();
    }

    return {
        activate: activate
    }
});
