$(function () {
    // ハンバーガーメニュー
    $btnMenu = $("#js-btn-menu");
    $gnav = $(".global-nav");

    // グローバルナビ領域をクリックしたとき
    $btnMenu.on("click", function () {
        $btnMenu.toggleClass("active");
        $gnav.toggleClass("show");
        $gnav.animate({ width: "toggle"}, 200);
    });

    // グローバルナビ領域外をクリックしたとき
    $(document).on("click", function (e) {
        if (
            !$(e.target).closest($gnav).length &&
            !$(e.target).closest($btnMenu).length
        ) {
            if ($gnav.hasClass("show")) {
                $gnav.removeClass("show");
                $btnMenu.toggleClass("active");
                $gnav.animate({ width: "toggle" }, 200);
            }
        }
    });

});