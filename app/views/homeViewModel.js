
define(['commons/log', 'commons/alert'], function(log, alert) {

    return {
        dostuff: function () {
            log.write('homeViewModel started');

            alert.showError($(".container"), "Successfully finished what you were asdasdasd");

            alert.showSuccess($(".container"), "Successfully finished what you were doin");

            alert.showWarning($(".container"), "Successfully finished what you were doin");

            alert.showInfo($(".container"), "Successfully finished what you were doin");
        }
    }
});