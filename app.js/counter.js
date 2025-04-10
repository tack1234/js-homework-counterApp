(() => {
    const $counter = document.getElementById("js-counter");

    const randomColorText = () => {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        while (color.length < 6) {
            color = "0" + color;
        }
        return "#" + color;
    };

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }
        
        if ($counter.textContent === "0") {
            $counter.style.color = "#000000";
        } else {
            $counter.style.color = randomColorText();
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();