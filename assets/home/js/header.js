var body = document.body;
var mode_checkbox = document.getElementById("mode-checkbox");

var navi_dropdown = document.getElementById("navi-dropdown");
var navi_dropdown_checkbox = document.getElementById("navi-dropdown-checkbox");
var navi_dropdown_buttons_container = document.getElementById("navi-dropdown-buttons-container");

var sunIcon = document.getElementById("sun-icon");
var moonIcon = document.getElementById("moon-icon");

var header = document.querySelector(".header-container");


window.addEventListener("load", function() {

    navi_dropdown.classList.add("no-animation");
    sunIcon.classList.add("no-animation");
    moonIcon.classList.add("no-animation");
    
    navi_dropdown_checkbox.addEventListener('change', function() {
        navi_dropdown.classList.remove("no-animation");
    });

    mode_checkbox.addEventListener('change', function() {
        sunIcon.classList.remove("no-animation");
        moonIcon.classList.remove("no-animation");
    });
    
});

window.addEventListener("resize", function() {
    if(window.innerWidth >= 940){
        navi_dropdown_checkbox.checked = false;
        header.classList.remove("expanded");
        body.classList.remove("no-scroll");
    }
});

window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add("smaller"); 
    } else {
        header.classList.remove("smaller");
    }
});


window.addEventListener("change", function() {

    if (navi_dropdown_checkbox.checked){
        header.classList.add("expanded");
        navi_dropdown_buttons_container.classList.add("expanded");
        body.classList.add("no-scroll");
    } else {
        header.classList.remove("expanded");
        navi_dropdown_buttons_container.classList.remove("expanded");
        body.classList.remove("no-scroll");
    }
});

