function onBodyImageSelection() {
    document.querySelectorAll("svg").forEach(function (element) {
        element.addEventListener("click", function (event) {
            const oElement = event.target.parentElement;
            if (oElement.getAttribute("class") !== "nose" && oElement.getAttribute("class") !== "mouth") {
                oElement.style.filter = oElement.style.filter === "grayscale(1)" ? "invert(93%) sepia(24%) saturate(6360%) hue-rotate(5deg) brightness(111%) contrast(108%)" : "grayscale(1)";
            }
        }.bind(self));
    }.bind(self));
}
onBodyImageSelection();
