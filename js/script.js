const lampadinaSpenta = document.getElementById("lampadina");
const accendiBtn = document.getElementById("accendi");
// console.log(lampadinaAccesa, accendiBtn)

accendiBtn.addEventListener("click", function() {
    if (lampadinaSpenta.src.includes("yellow_lamp.png")) {
        lampadinaSpenta.src = "./img/white_lamp.png";
        accendiBtn.textContent = "Accendi"
    } else {
        lampadinaSpenta.src = "./img/yellow_lamp.png";
        accendiBtn.textContent = "Spegni";
    }
})

