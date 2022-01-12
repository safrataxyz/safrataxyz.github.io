window.addEventListener('load', (event) => {
    // Variables
    const animationBox = document.getElementById("animation_box");
    const bigHole = document.getElementById("big_hole");

    animationBox.classList.add("animate");
    
    animationBox.addEventListener('click', (event) => {
        animationBox.classList.remove("animate");
        animationBox.remove();
        window.location.href = "about.html";
    })

    bigHole.addEventListener("animationend", (event) => {
     
        if (this.event.animationName === 'dissipate') {
            animationBox.remove();
            window.location.href = "about.html";
        }
    })
});
