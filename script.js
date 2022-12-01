let time = 1800;
const count = document.getElementById("time");
const sale = document.getElementById("sale");
const oldPrice = document.getElementById("old");
const buy = document.getElementById("buy");

const blockFifth = document.getElementById("block__fifth");



intervalID = setInterval(updateCount, 1000);

function updateCount() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60; 
    seconds = seconds < 10 ? "0" + seconds: seconds;

    count.innerHTML = `${minutes}:${seconds}`;
    time--;


    if(time === -1) {
        count.innerHTML = `Время действия скидки истекло`;
        count.classList.add("time__over")
        oldPrice.classList.remove("line")
        clearInterval(intervalID);
        sale.classList.add("line")
    } 

}

function send() {
    alert("Заказ принят!")
}

function scrollFunction() {
    document.body.scrollTop = 1000000; // For Safari
    document.documentElement.scrollTop = 10000000;

}

