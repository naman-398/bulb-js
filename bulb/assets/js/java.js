let mybulb = document.querySelector(".bulb");
let btn = document.querySelector("button");
let city = 1;
btn.addEventListener("click", function () {
    if (city === 1) {
        mybulb.classList.add("on");
        btn.innerHTML = "off"
        city = 0;
    } else {
        mybulb.classList.remove("on");
        btn.innerHTML = "on"
        city = 1;
    }
})