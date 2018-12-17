$.each($("header>span"), function() {
    $(this).on("click", function() {
        $(this).addClass("bg").siblings().removeClass("bg");
    })
})

$(".btn>span").on("click", function() {
    location.href = "./page/serch.html"
})