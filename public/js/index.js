$(".menu").click(function(){
    $(this).toggleClass("active");
    $(".main-nav").toggleClass("active");
})

$("*").each(function () { 
    $(this).click(function () { 
       var target=$(this).attr("data-target");
        if(target!=undefined){
           var top=$(target).offset().top - 80;

           $("html,body").animate({scrollTop:top},parseInt(300));
        }
    });
});

$(".check-box").click(function(){
    $(".check-box").children(".radio-box").removeClass("active")
    $(this).children(".radio-box").addClass("active");
})