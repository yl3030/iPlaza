$(".check-box").click(function(){
    $(this).toggleClass("active");
})

$(".menu").click(function(){
    $(this).toggleClass("active");
    $(".main-nav").toggleClass("active");
})