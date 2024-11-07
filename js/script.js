const lampadinaSpenta = document.getElementById("lampadina");
const accendiBtn = document.getElementById("accendi");

// console.log(lampadinaAccesa, accendiBtn)

accendiBtn.addEventListener("click", function() {
    lampadinaSpenta.src = "./img/yellow_lamp.png";
})
