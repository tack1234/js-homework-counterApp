(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
        $counter.textContent = 0;
        $counter.style.color = "#000000";
    }

    document.getElementById("js-reset-button").addEventListener("click", clickHandler)
})();