const navbarElements = document.getElementById("navbar").getElementsByTagName("li");

const categoriesStart = [
    document.getElementById("Introduction"),
    document.getElementById("LeSon"),
    document.getElementById("Ecoute"),
    document.getElementById("Casque"),
    document.getElementById("Spatialisation"),
    document.getElementById("Conclusion")
];

const categoriesEnd = [
    document.getElementById("EndIntroduction"),
    document.getElementById("EndLeSon"),
    document.getElementById("EndEcoute"),
    document.getElementById("EndCasque"),
    document.getElementById("EndSpatialisation"),
    document.getElementById("EndConclusion")
];

var activeIndex = 0;

window.onscroll = function () {
    checkNewVisible();
}

function checkNewVisible() {
    for (let i = 0; i < categoriesStart.length; i++) {
        if (i != activeIndex) {
            if (checkVisible(categoriesStart[i]) || checkVisible(categoriesEnd[i])) {
                SetNavbarElementStyle(navbarElements[i], "underline");
                SetNavbarElementStyle(navbarElements[activeIndex], "none");
                activeIndex = i;
            } else {
                SetNavbarElementStyle(navbarElements[i], "none");
            }
        }
    }
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function SetNavbarElementStyle(element, style) {
    const link = element.getElementsByTagName("a")[0];
    link.style.textDecoration = style;
}
SetNavbarElementStyle(navbarElements[0], "underline");
checkNewVisible();