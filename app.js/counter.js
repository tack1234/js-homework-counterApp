(() => {
    const $counter = document.getElementById("js-counter");

    const randomColor = () => {
        let color = Math.floor(Math.random() * 16777215).toString(16);
        for(count = color.length; count < 6; count++) {
            color = "0" + color;
        }
    let randomColor = "#" + color;
    };

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        } else {
            $counter.textContent = currentCount - 1;
        }
    }

    for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
        document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
    }
})();