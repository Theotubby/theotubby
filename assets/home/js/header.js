const body = document.body;
const mode_checkbox = document.getElementById("mode-checkbox");

const navi_dropdown = document.getElementById("navi-dropdown");
const navi_dropdown_checkbox = document.getElementById("navi-dropdown-checkbox");
const navi_dropdown_buttons_container = document.getElementById("navi-dropdown-buttons-container");

const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

const header = document.getElementById("header-container");

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


navi_dropdown_checkbox.addEventListener("change", function() {
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



