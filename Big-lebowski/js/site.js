(function() {
    "use strict";

    let $pickBtn = $("#pickButton");
    $("#reasonDropdown li a").on("click", function() {
        let reason = $(this).text();
        $pickBtn.text(reason);
    })

    let $sentDialog = $('#sentDialog');
    $('#contactForm').on("submit", function() {
        $sentDialog.modal("show");
        return false;
    })

    let $sentAlert = $("#sentAlert");
    $sentDialog.on("hidden.bs.modal", function() {
        $sentAlert.show();
    })

    $sentAlert.on("close.bs.alert", function() {
        $sentAlert.hide();
        return false; 
    })
    $("#contactForm input[type=submit]").tooltip({
        show: 500,
        hide:0
    });

    $("#theCarousel").carousel()
})();
