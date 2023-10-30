let bars = $(".fa-bars");
let cross = $(".fa-xmark");
let navmenu = $(".nav-menu2");


bars.click(()=> {
    bars.addClass("hide");
    cross.removeClass("hide");
    navmenu.removeClass("hide");
});

cross.click(()=> {
    bars.removeClass("hide");
    cross.addClass("hide");
    navmenu.addClass("hide");
});


$(".margherita").mouseover(()=> {
    $(".ingMargherita").css("visibility" , "visible");   
});
$(".margherita").mouseout(()=> {
    $(".ingMargherita").css("visibility" , "hidden");   
});
