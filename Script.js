let select              =     function(s) {return document.querySelector(s);},
    selectAll           =     function(s) {return document.querySelectorAll(s);},
    WindowWidth         =     window.innerWidth,
    ScrollUp_icon = document.getElementById('ScrollUp_icon'),
    scrollIn = select('#path'),
    down = select('#downStick'),
    left = select('#leftStick'),
    right = select('#rightStick'),
    AboutMeScrollOffset = document.getElementById("AboutMe_section").offsetTop,
    MySkillsScrollOffset = document.getElementById("MySkills_section").offsetTop,
    EndScrollOffset = document.getElementById("End_section").offsetTop,
    isClicked = false,
    timing = "cubic-bezier(.21,.07,.19,.89)",
    dur = 0.6,
    BurgerButton = document.querySelector("#buttonBurger"),
    pathLength = scrollIn.getTotalLength(),
    intro_navbar = document.getElementById("intro_navbar"),
    Name = document.getElementById("Name"),
    Surname = document.getElementById("Surname"),
    Logo = document.getElementById("Logo"),
    Loader = document.getElementById("Loader"),
    WhiteBG = document.getElementById("WhiteBG"),
    delay = 2000;


scrollIn.style.strokeDashoffset = pathLength;
scrollIn.style.strokeDasharray = pathLength;

document.getElementById("AboutMe_section").style.display = "none";
document.getElementById("MySkills_section").style.display = "none";
document.getElementById("End_section").style.display = "none";
//-------------------------------------------------------------------
//   Start
//-------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", Start);
var rellax = new Rellax('.rellax');
function Start() {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    setTimeout(Loader_Start, delay);
    ScrollUp_icon.style.left = 85 + '%';
    ScrollUp_icon.style.top = 90 + '%';
    ScrollUp_icon.style.opacity = "0";
    ScrollUp_icon.style.pointerEvents = "none";
    if (WindowWidth > 1020) {
        ScrollUp_icon.style.display = "block";
        intro_navbar.style.top = 0 + 'px';
        BurgerButton.style.display = "none"
    } else {
        ScrollUp_icon.style.display = "none";
        intro_navbar.style.top = -500 + 'px';
        BurgerButton.style.display = "block"
    }
}

function Loader_Start () {
    Name.style.width = 20 + 'px';
    Name.style.marginLeft = 100 + 'px';
    Surname.style.width = 17.5 + 'px';
    setTimeout(Next, 1300);
}

function Next() {
    document.getElementById("AboutMe_section").style.display = "block";
    document.getElementById("MySkills_section").style.display = "block";
    document.getElementById("End_section").style.display = "block";
    Logo.style.left = 5 + '%';
    Logo.style.top = 5 + '%';
    Loader.style.pointerEvents = "none";
    WhiteBG.style.opacity = "0";
    document.body.style.overflow = "visible";
}


//-------------------------------------------------------------------
//Sound In Start
//-------------------------------------------------------------------

// var sound = new Howl({
//     src: ['media/audio/hello-4.wav'],
//     volume: 0.9,
//     autoplay: true,
//     loop: false
// });

//-------------------------------------------------------------------
//Lock Open DevTools
//-------------------------------------------------------------------

// document.onkeydown = function checkKeycode(event) {
//     var keycode;
//     if(!event) var event = window.event;
//     if (event.keyCode) keycode = event.keyCode;
//     else if(event.which) keycode = event.which;
//     if (keycode === 123) {return false}
// }
//
// document.oncontextmenu = function () {return false};

//-------------------------------------------------------------------
//  Burger Button
//-------------------------------------------------------------------

Moveit.put(LineOne, {
    start: "0%",
    end: "35%"
});
Moveit.put(LineTwo, {
    start: "1%",
    end: "50%"
});
Moveit.put(LineThird, {
    start: "0%",
    end: "35%"
});

BurgerButton.addEventListener("click", function() {
    if (!isClicked) {
        intro_navbar.style.top = 0 + 'px';
        Moveit.animate(LineOne, {
            start: "71%",
            end: "90%",
            duration: dur,
            timing: timing
        });
        Moveit.animate(LineTwo, {
            start: "50%",
            end: "50%",
            duration: dur,
            timing: timing
        });
        Moveit.animate(LineThird, {
            start: "71%",
            end: "90%",
            duration: dur,
            timing: timing
        });
    } else {
        intro_navbar.style.top = -500 + 'px';
        Moveit.animate(LineOne, {
            start: "0%",
            end: "35%",
            duration: dur,
            timing: timing
        });
        Moveit.animate(LineTwo, {
            start: "0%",
            end: "100%",
            duration: dur,
            timing: timing
        });
        Moveit.animate(LineThird, {
            start: "0%",
            end: "35%",
            duration: dur,
            timing: timing
        });
    }
    isClicked = !isClicked;
});

BurgerButton.addEventListener("mouseenter", function() {
    if (isClicked === false) {
        Moveit.animate(LineTwo, {
            start: "1%",
            end: "99%",
            duration: dur,
            timing: timing
        });
    } else {
        Moveit.animate(LineOne, {
            start: "71%",
            end: "90%",
            duration: dur,
            timing: timing
        });
        Moveit.animate(LineThird, {
            start: "71%",
            end: "90%",
            duration: dur,
            timing: timing
        });
    }
});

BurgerButton.addEventListener("mouseleave", function() {
    if (isClicked === true) {
        Moveit.animate(LineOne, {
            start: "62%",
            end: "100%",
            duration: dur,
            timing: timing
        });
        Moveit.animate(LineThird, {
            start: "62%",
            end: "100%",
            duration: dur,
            timing: timing
        });
    } else {
        Moveit.animate(LineTwo, {
            start: "1%",
            end: "49%",
            duration: dur,
            timing: timing
        });
    }
});

//-------------------------

function WindowSize() {
    WindowWidth = window.innerWidth;
    if (WindowWidth > 1020) {
        ScrollUp_icon.style.display = "block";
        intro_navbar.style.top = 0 + 'px';
        BurgerButton.style.display = "none"
    } else {
        ScrollUp_icon.style.display = "none";
        intro_navbar.style.top = -500 + 'px';
        BurgerButton.style.display = "block"
    }
}

WindowSize();

window.addEventListener("resize", WindowSize);



//-------------------------------------------------------------------
//  Nav Bar
//-------------------------------------------------------------------

function AboutMe_scroll() {
    window.scrollTo(0, AboutMeScrollOffset);
}

function MySkills_scroll() {
    window.scrollTo(0, MySkillsScrollOffset);
}

function HireMe_scroll() {
    window.scrollTo(0, EndScrollOffset);
}

document.addEventListener("scroll", function () {
    AboutMeScrollOffset = document.getElementById("AboutMe_section").offsetTop;
    MySkillsScrollOffset = document.getElementById("MySkills_section").offsetTop;
    EndScrollOffset = document.getElementById("End_section").offsetTop;
});

window.addEventListener("resize", function () {
    AboutMeScrollOffset = document.getElementById("AboutMe_section").offsetTop;
    MySkillsScrollOffset = document.getElementById("MySkills_section").offsetTop;
    EndScrollOffset = document.getElementById("End_section").offsetTop;
});


//-------------------------------------------------------------------
//ScrollDownIcon
//-------------------------------------------------------------------

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("mouseIco").style.opacity = '0';
    } else {document.getElementById("mouseIco").style.opacity = '1';}
}

scrollFunction();

window.addEventListener("scroll", scrollFunction);


//-------------------------------------------------------------------
//   UpScroll
//-------------------------------------------------------------------

function UpScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = Math.round((winScroll / height) * pathLength);

    if (scrolled === 0) {
        ScrollUp_icon.style.opacity = "0";
        ScrollUp_icon.style.pointerEvents = "none";
    } else if (scrolled !== 0){
        ScrollUp_icon.style.opacity = "1";
        ScrollUp_icon.style.pointerEvents = "auto";
    }

    scrollIn.style.opacity = "1";
    scrollIn.style.stroke = "#808080";
    scrollIn.style.strokeDashoffset = pathLength - scrolled;
}
ScrollUp_icon.addEventListener("click", function(){window.scrollTo(0, 0);});
window.addEventListener("scroll", UpScroll);
