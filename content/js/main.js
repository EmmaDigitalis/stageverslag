//Navigation----------------------------------------------------
function toggleNav() {
    $('.fold-target').toggleClass('folded-nav');
    $('nav').toggleClass('nav-activator');
}

function addNav() {
    $.get("includes/nav.html", function (html_string) {
        var elements = $(html_string);
        var found = elements.closest('nav')[0].innerHTML;
        $("nav").html(found);
    }, 'html');
}

$(document).on("click", "#nav-button", function () {
    if ($('nav').hasClass('nav-activator')) {
        toggleNav(this);
    } else {
        window.location = "index.html";
    }

});

$(document).on("click", "#nav-fade", function () {
    toggleNav(this);
});

$(document).ready(function () {
    addNav();
});

//Home Gallery--------------------------------------------------
var currentImg = 1;

function gallerySlides(){
    if (currentImg < 9){
        currentImg++;
    }else{
        currentImg = 1;
    }
    $("#imggallery>img").removeClass("invis");
    $("#imggallery>img").addClass("invis");
    $("#imggallery>img:nth-child(" + currentImg + ")").removeClass("invis");
}

$("#imggallery").ready(function(){
    setInterval(() => {
        gallerySlides();
    }, 4200);
})

//Articles------------------------------------------------------
function setArticle(item) {
    let article = item;

    $('.selected').addClass('unselected');
    $('.selected').removeClass('selected');

    $(article).addClass('selected');
    $(article).removeClass('unselected');
}

function unsetArticle(item) {
    let article = item;

    $(article).addClass('unselected');
    $(article).removeClass('selected');
}

$(document).on("click", ".unselected", function () {
    setArticle(this);
});

$(document).on("click", ".selected", function () {
    unsetArticle(this);
});

//Vormgeving------------------------------------------------------
$(document).on("click", "#close-vormgeving-overlay", function () {
    $('#overlay-vormgeving').addClass('overlay-hidden');
});

function activateOverlay(overlay_id) {
    let identifier = document.getElementById(overlay_id);
    $('#overlay-vormgeving').removeClass('overlay-hidden');
    $("#overlay-vormgeving>section").addClass('hidden');
    $(identifier).removeClass('hidden');
}

$("section>.overlay-gallery>.gallery-container>figure").on("click", function(){
    $(".gallerymaxsize").removeClass("gallerymaxsize");
    $(this).addClass("gallerymaxsize");
    $(this).children().addClass("gallerymaxsize");
    console.log(this);
})

//Add bg col when hover
$("#page-vormgeving>article:not(.vg4)").on("mouseenter", function(){
    if (!$(".bgcol").hasClass("bg2")){
        $(".bgcol").addClass("bg2");
    }
})

$("#page-vormgeving>article.vg4").on("mouseenter", function(){
    if (!$(".bgcol").hasClass("bg4")){
        $(".bgcol").addClass("bg4");
    }
})

//Remove bg col when exit
$("#page-vormgeving>article").on("mouseleave", function(){
    $(".bgcol").removeClass("bg2 bg4");
})

//Werkprocessen---------------------------------------------------
function setWerkproces(wp1, wp2, lbs) {
    $('#wp-k1').removeClass();
    $('#wp-k1').addClass(wp1);

    $('#wp-k2').removeClass();
    $('#wp-k2').addClass(wp2);

    $('#wp-lbs').removeClass();
    $('#wp-lbs').addClass(lbs);

    $('.tab').removeClass('current');
    if (wp1 == 'depth-front') {
        $('.tab:first-of-type').addClass('current');
    } else if (wp1 == 'depth-center-l') {
        $('.tab:nth-of-type(2)').addClass('current');
    } else {
        $('.tab:nth-of-type(3)').addClass('current');
    }

    $('.depth-fade').removeClass('depth-fade');
}

function setStageTime(score, focusbutton) {
    let scores = {
        "stage1_1" : {
            "B1-K1-W1": "4",
            "B1-K1-W2": "2",
            "B1-K1-W4": "2",
            "B1-K1-W5": "2",
            "B1-K1-W6": "5",
            "B1-K2-W1": "2",
            "B1-K2-W3": "3",
            "B1-K2-W4": "4",
            "B1-K2-W5": "2",
            "LOOPBAANSTURING1": "4",
            "LOOPBAANSTURING2": "3"
        },
        "stage1_2" : {
            "B1-K1-W1": "4",
            "B1-K1-W2": "3",
            "B1-K1-W4": "3",
            "B1-K1-W5": "3",
            "B1-K1-W6": "5",
            "B1-K2-W1": "3",
            "B1-K2-W3": "4",
            "B1-K2-W4": "4",
            "B1-K2-W5": "4",
            "LOOPBAANSTURING1": "4",
            "LOOPBAANSTURING2": "4"
        },
        "stage1_3" : {
            "B1-K1-W1": "4",
            "B1-K1-W2": "4",
            "B1-K1-W4": "4",
            "B1-K1-W5": "4",
            "B1-K1-W6": "5",
            "B1-K2-W1": "4",
            "B1-K2-W3": "4",
            "B1-K2-W4": "4",
            "B1-K2-W5": "4",
            "LOOPBAANSTURING1": "4",
            "LOOPBAANSTURING2": "4"
        },
        "stage2_1" : {
            "B1-K1-W1": "4",
            "B1-K1-W2": "3",
            "B1-K1-W4": "4",
            "B1-K1-W5": "4",
            "B1-K1-W6": "5",
            "B1-K2-W1": "4",
            "B1-K2-W3": "4",
            "B1-K2-W4": "4",
            "B1-K2-W5": "5",
            "LOOPBAANSTURING1": "3",
            "LOOPBAANSTURING2": "3"
        },
        "stage2_2" : {
            "B1-K1-W1": "4",
            "B1-K1-W2": "4",
            "B1-K1-W4": "4",
            "B1-K1-W5": "4",
            "B1-K1-W6": "5",
            "B1-K2-W1": "4",
            "B1-K2-W3": "4",
            "B1-K2-W4": "5",
            "B1-K2-W5": "5",
            "LOOPBAANSTURING1": "4",
            "LOOPBAANSTURING2": "4"
        },
        "stage2_3" : {
            "B1-K1-W1": "5",
            "B1-K1-W2": "5",
            "B1-K1-W4": "5",
            "B1-K1-W5": "5",
            "B1-K1-W6": "5",
            "B1-K2-W1": "5",
            "B1-K2-W3": "5",
            "B1-K2-W4": "5",
            "B1-K2-W5": "5",
            "LOOPBAANSTURING1": "5",
            "LOOPBAANSTURING2": "5"
        }
    };
    
    if (score in scores) {
        let i = 0;
        for (property in scores[score]){
            $("#" + property).removeClass();
            $("#" + property).addClass("score score-" + scores[score][property]);
        }
    }else{
        alert("expected key not found in scores object");
    }

    $(".stagebutton").removeClass("current");
    $("#" + focusbutton).addClass("current");

    console.log(focusbutton);
    $(".bgcol").removeClass("bg1 bg2 bg3 bg4");
    switch (focusbutton){
        case "stage-btn1":
            $(".bgcol").addClass("bg1");
            break;
        case "stage-btn2":
            $(".bgcol").addClass("bg1");
            break;
        case "stage-btn3":
            $(".bgcol").addClass("bg2");
            break;
        case "stage-btn4":
            $(".bgcol").addClass("bg3");
            break;
        case "stage-btn5":
            $(".bgcol").addClass("bg4");
            break;
        case "stage-btn6":
            $(".bgcol").addClass("bg4");
            break;                    
    }

    if (score.includes("stage1")){
        $(".bar").removeClass("stage2");
        $(".bar").addClass("stage1");
    }else{
        $(".bar").removeClass("stage1");
        $(".bar").addClass("stage2");    
    }
}



//Reflecties------------------------------------------------------
function reflectieSegment(nth, segment) {
    let nth_area = "#page-reflecties>#reflections>section>article>.inner-article>.content>section:nth-of-type(" + String(nth) + ")";
    let set_segment = nth_area + ">." + String(segment);

    let menu = "#page-reflecties>#reflections>section>article>.inner-article>.content>.menu"
    let menu_segment = menu + ">." + String(segment);

    $(nth_area + '>*').removeClass('current');
    $(set_segment).addClass('current');

    $(menu + ">*").removeClass('current');
    $(menu_segment).addClass('current');
}

function scrollHandler() {
    let screenCenter = window.innerWidth / 2;

    $('#scroll-area>article').each(function () {
        if (($(this).position().left + ($(this).width() / 2)) < screenCenter) {
            $(this).css("opacity", 1 - (screenCenter - ($(this).position().left + ($(this).width() / 2))) / $(this).width());
        } else {
            $(this).css("opacity", 1 - (($(this).position().left + ($(this).width() / 2)) - screenCenter) / $(this).width());
        }
    });

    console.log($('#scroll-area').scrollLeft());
    if ($('#scroll-area').scrollLeft() < 2000){
        if (!$(".bgcol").hasClass("bg1")){
            $(".bgcol").removeClass("bg2 bg3 bg4");
            $(".bgcol").addClass("bg1");
        }
    }else if (($('#scroll-area').scrollLeft() > 2000) && ($('#scroll-area').scrollLeft() < 5001)){
        if (!$(".bgcol").hasClass("bg2")){
            $(".bgcol").removeClass("bg1 bg3 bg4");
            $(".bgcol").addClass("bg2");
        }
    }else if (($('#scroll-area').scrollLeft() > 5000) && ($('#scroll-area').scrollLeft() < 7001)){
        if (!$(".bgcol").hasClass("bg3")){
            $(".bgcol").removeClass("bg1 bg2 bg4");
            $(".bgcol").addClass("bg3");
        }
    }else if ($('#scroll-area').scrollLeft() > 7000){
        if (!$(".bgcol").hasClass("bg4")){
            $(".bgcol").removeClass("bg1 bg2 bg3");
            $(".bgcol").addClass("bg4");
        }
    }
}

$('#scroll-area').on('scroll', function () {
    scrollHandler();
});


//Just a funny hover function------------------------------------------------------
$("#page-werkprocessen>section").mouseenter(function(){
    addFade();
});

function addFade(){
    $(".depth-fade").removeClass("depth-fade");
    $("#page-werkprocessen>section").toggleClass("depth-fade"); 
}

$("#page-werkprocessen>section").mouseleave(function(){
    removeFade();
});

function removeFade(){
    $(".depth-fade").removeClass("depth-fade");
}

//Leerdoelen and such-------------------------------------------------------------
function setLeerdoel(page) {
    let REpage = page;
    $("#page-leerdoelen>section").removeClass("current");
    $("#page-leerdoelen>section:nth-child("+REpage+")").addClass("current");

    console.log(REpage)

    $(".bgcol").removeClass("bg2 bg4");
    if (REpage == "1"){
        $(".bgcol").addClass("bg2");
    }else{
        $(".bgcol").addClass("bg4");
    }
}

//Reflectie Scroll---------------------------------------------------------------------------
function scrollReflections(val){
    $("#page-reflecties>#reflections>section").css("scroll-snap-type", "unset");
    $('#scroll-area').animate({
        scrollLeft: -308 + (1020 * val) + ($("#page-reflecties > #reflections > section > article").width() / 2)
    }, 700, function(){
        
    $("#page-reflecties>#reflections>section").css("scroll-snap-type", "x mandatory");
    });
}

$("#select-reflect").on("change", function(){
    scrollReflections(this.value);
});

//Reflectie Scroll---------------------------------------------------------------------------
function setVerslag(val){
    var verslagId = Number(val);

    $(".bgcol").removeClass("bg1 bg2 bg3 bg4");

    switch (verslagId) {
        case 0:
            $(".inactive").removeClass("inactive");
            break;
        case 1:
            $(".inactive").removeClass("inactive");

            $("#link-werk").addClass("inactive");
            $("#link-vormgeving").addClass("inactive");

            $(".bgcol").addClass("bg1");
            break;
        case 2:
            $(".inactive").removeClass("inactive");
            
            $("#link-overmij").addClass("inactive");
            $("#link-bedrijf").addClass("inactive");
            
            $(".bgcol").addClass("bg2");
            break;
        case 3:
            $(".inactive").removeClass("inactive");

            $("#link-overmij").addClass("inactive");
            $("#link-bedrijf").addClass("inactive");
            $("#link-vormgeving").addClass("inactive");
            
            $(".bgcol").addClass("bg3");
            break;
        case 4:
            $(".inactive").removeClass("inactive");

            $("#link-overmij").addClass("inactive");
            $("#link-bedrijf").addClass("inactive");
            
            $(".bgcol").addClass("bg4");
            break;
    }
}

$("#select-verslag").on("change", function(){
    setVerslag(this.value);
});

$("#select-verslag").on("click", function(){
    $(".verslag-selector-animator").removeClass("verslag-selector-animator");
});

//kkbfknbksjbnkangvnakjbnlbnlabn
$("#stage1items").on("mouseenter", function(){
    if (!$(".bgcol").hasClass("bg2")){
        $(".bgcol").addClass("bg2");
    }
})
$("#stage1items").on("mouseleave", function(){
    $(".bgcol").removeClass("bg2");
})


$("#stage2items").on("mouseenter", function(){
    if (!$(".bgcol").hasClass("bg34")){
        $(".bgcol").addClass("bg34");
    }
})
$("#stage2items").on("mouseleave", function(){
    $(".bgcol").removeClass("bg34");
})


$(".works3").on("mouseenter", function(){
    if (!$(".bgcol").hasClass("bg3")){
        $(".bgcol").addClass("bg3");
    }
})
$(".works3").on("mouseleave", function(){
    $(".bgcol").removeClass("bg3");
})


$(".works4").on("mouseenter", function(){
    if (!$(".bgcol").hasClass("bg4")){
        $(".bgcol").addClass("bg4");
    }
})
$(".works4").on("mouseleave", function(){
    $(".bgcol").removeClass("bg4");
})