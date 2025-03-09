var dropdownButtonsContainer = document.getElementById("navi-dropdown-buttons-container");
var navidropdowncheckbox = document.getElementById("navi-dropdown-checkbox");
var modecheckbox = document.getElementById("mode-checkbox");
var body = document.body;

var sunIcon = document.getElementById("sun-icon");
var moonIcon = document.getElementById("moon-icon");


window.addEventListener("load", function() {
    
    dropdownButtonsContainer.classList.add("no-animation");
    sunIcon.classList.add("no-animation");
    moonIcon.classList.add("no-animation");
    
    navidropdowncheckbox.addEventListener('change', function() {
        dropdownButtonsContainer.classList.remove("no-animation");
    });

    modecheckbox.addEventListener('change', function() {
        sunIcon.classList.remove("no-animation");
        moonIcon.classList.remove("no-animation");
    });
});

window.addEventListener("resize", function() {
    if(window.innerWidth >= 940){
        dropdownButtonsContainer.classList.add("no-animation");
        navidropdowncheckbox.checked = false;
    }else{
        navidropdowncheckbox.addEventListener('change', function() {
            dropdownButtonsContainer.classList.remove("no-animation");
        });
    }

});

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add("smaller"); 
    } else {
        header.classList.remove("smaller");
    }
});

navidropdowncheckbox.addEventListener("change", function() {
    if (navidropdowncheckbox.checked) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  });

