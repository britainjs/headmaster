$(function () {

    $("#event-cancel").click(function (event) {
        history.go(-1);
        event.preventDefault();
    });

    $("#event-save").click(function (event) {
        console.log("save");
        event.preventDefault();
    });

});