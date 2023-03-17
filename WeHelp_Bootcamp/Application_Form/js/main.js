const main = document.getElementById("main");

function showContent() {
    var deviceHeight = window.screen.height;
    main.style.display = "block";
    main.style.height = deviceHeight + "px";

    main.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}