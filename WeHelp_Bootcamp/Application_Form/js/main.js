const main = document.getElementById("main");

function showContent() {
    // var deviceHeight = window.screen.height;
    var deviceHeight = window.innerHeight;
    main.style.display = "block";
    main.style.height = deviceHeight + "px";

    main.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

// window.addEventListener("click", function () {
//     element.scrollIntoView();
//   });