let bars = $(".fa-bars");
let cross = $(".fa-xmark");
let navmenu = $(".nav-menu2");
let sun = $(".fa-sun");
let moon = $(".fa-moon");

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

moon.click(()=> {
    moon.addClass("hide");
    sun.removeClass("hide");
    $(":root").css("--primary" , "rgb(26, 26, 26)");
    $(":root").css("--fcolor" , "rgb(249, 249, 249)");
    $(".nav-container").css("background-color" , "var(--secondary)");
    $("footer").css("background-color" , "var(--secondary)");
    
});

sun.click(()=> {
    sun.addClass("hide");
    moon.removeClass("hide");
    $(":root").css("--primary" , "rgb(249, 249, 249)");
    $(":root").css("--fcolor" , "rgb(26, 26, 26)");
    $(".nav-container").css("background-color" , "rgb(150, 149, 149)");
    $("footer").css("background-color" , "rgb(150, 149, 149)");
});
