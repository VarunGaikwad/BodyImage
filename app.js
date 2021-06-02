function onBodyImageSelection() {
    document.querySelectorAll("svg").forEach(function (element) {
        element.addEventListener("click", function (event) {
            const oElement = event.target.parentElement;
            if (oElement.getAttribute("class") !== "nose" && oElement.getAttribute("class") !== "mouth") {
                oElement.style.filter = oElement.style.filter === "none" ? "grayscale(1)" : "none";
            }
        }.bind(self));
    }.bind(self));
}
onBodyImageSelection();