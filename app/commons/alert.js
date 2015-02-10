
define(['bootstrap'], function(bs) {

    function show(el, msg, type) {
        var dom = '<div class="alert alert-' + type + '" role="alert">' + msg + '</div>';
        $(el).append(dom);
        $(".alert").alert();
    }

    function showError(el, msg) {
        show(el, msg, 'danger');
    }

    function showWarning(el, msg) {
        show(el, msg, 'warning');
    }

    function showInfo(el, msg) {
        show(el, msg, 'info');
    }

    function showSuccess(el, msg) {
        show(el, msg, 'success');
    }

    return {
        showError: showError,
        showWarning: showWarning,
        showInfo: showInfo,
        showSuccess: showSuccess
    }
});