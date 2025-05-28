
const btn = document.querySelectorAll(".box")
const body = document.querySelector("body");
btn.forEach(function (button) {
    button.addEventListener('click', function (event) {
        if (event.target.id === 'box1') {
            body.style.backgroundColor = "aliceblue";
        }
        else if (event.target.id === 'box2') {
            body.style.backgroundColor = "rgb(10, 86, 153)";
        }
        else if (event.target.id === 'box3') {
            body.style.backgroundColor = "rgb(167, 20, 111)";
        }
        else if (event.target.id === 'box4') {
            body.style.backgroundColor = "rgb(215, 166, 6)";
        }
    });

});