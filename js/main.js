function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function openMenu() {
   
    var burgerOverlay = document.querySelector(".burgerOverlay");
    var burgerMenu = document.querySelector(".burgerMenu");
    var burgerLink = document.querySelectorAll(".burgerLink");

    var bar = document.querySelector(".bar1");
    var bar2 = document.querySelector(".bar4");

    var overlayWidth = burgerOverlay.offsetWidth;

    if (overlayWidth == 0) {
        burgerOverlay.style.width = "500px";
        burgerOverlay.style.position = "fixed";
        burgerMenu.style.position = "fixed";

        bar.style.backgroundColor = "rgb(86, 0, 112)";
        bar2.style.backgroundColor = "rgb(86, 0, 112)";

        for (let i = 0; i < burgerLink.length; i++) {
            burgerLink[i].style.display = "block";
            await sleep(400);
            burgerLink[i].style.opacity = "1";
        }

    }

    if (overlayWidth == 500) {
        for (i = 0; i < burgerLink.length; i++) {
            burgerLink[i].style.opacity = "0";
            await sleep(400);
            burgerLink[i].style.display = "none";
        }
        await sleep(400);

        burgerOverlay.style.width = "0px";
        burgerOverlay.style.position = "absolute";
        burgerMenu.style.position = "absolute";

        bar.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
    }
}

