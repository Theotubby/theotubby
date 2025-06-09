const body = document.body;
const mode_checkbox = document.getElementById("mode-checkbox");

const navi_dropdown = document.getElementById("navi-dropdown");
const navi_dropdown_checkbox = document.getElementById("navi-dropdown-checkbox");
const navi_dropdown_buttons_container = document.getElementById("navi-dropdown-buttons-container");

const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

const header = document.getElementById("header-container");
const navi_button_container = document.getElementById("navi-button-container");

function updatePadding() {
    const width = window.innerWidth;

    if (width >= 300) {
        let paddingVW = 1.4;

        if (width < 1024) {
            const steps = Math.floor((width - 300) / 100);
            paddingVW += steps * 0.5;
        } else if (width > 1024 && width < 1500){
            const baseSteps = Math.floor((1024 - 300) / 100);
            paddingVW += baseSteps * 0.5;

            let extraSteps = Math.floor((width - 1024) / 100);
            let scaling = 0.325;
            for (let i = 0; i < extraSteps; i++) {
                paddingVW += scaling;
                scaling = Math.max(0, scaling - 0.035); // wird immer um 0.01 kleiner, nie negativ
            }
        } else if (width > 1500){
            const baseSteps = Math.floor((1024 - 300) / 100);
            paddingVW += baseSteps * 0.325;

            let extraSteps = Math.floor((width - 1024) / 100);
            let scaling = 0.4;
            for (let i = 0; i < extraSteps; i++) {
                paddingVW += scaling;
                scaling = Math.max(0, scaling - 0.025); // wird immer um 0.01 kleiner, nie negativ
            }
        }
        navi_button_container.style.paddingLeft = paddingVW + 'vw';
    } else {
        navi_button_container.style.paddingLeft = '0vw';
    }
}

window.addEventListener("resize", function() {
    if(window.innerWidth >= 940){
        navi_dropdown_checkbox.checked = false;
        header.classList.remove("expanded");
        body.classList.remove("no-scroll");
    }
    updatePadding();
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

// Initial ausführen
updatePadding();



