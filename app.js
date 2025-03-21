function soat() {
    let vaqt = new Date("2025.03.27").getTime();
    setInterval(() => {
        let now = new Date().getTime();
        let soat2 = vaqt - now;
        
        let kun = Math.floor(soat2 / (1000 * 60 * 60 * 24));
        let soat = Math.floor((soat2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minut = Math.floor((soat2 % (1000 * 60 * 60)) / (1000 * 60));
        let secund = Math.floor((soat2 % (1000 * 60)) / 1000);
        
        document.querySelector(".kun").innerText = kun;
        document.querySelector(".soat").innerText = soat;
        document.querySelector(".minut").innerText = minut;
        document.querySelector(".secund").innerText = secund;
    }, 1000);
}

soat();