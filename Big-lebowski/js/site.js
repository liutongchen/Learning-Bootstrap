(function() {
    "use strict";

    let $pickBtn = $("#pickButton");
    $("#reasonDropdown li a").on("click", function() {
        let reason = $(this).text();
        $pickBtn.text(reason);
    })
})();
