window.addEventListener('load', (event) => {
    // Variables
    const animationBox = document.getElementById("animation_box");
    const bigHole = document.getElementById("big_hole");

    animationBox.classList.add("animate");
    
    animationBox.addEventListener('click', (event) => {
        animationBox.classList.remove("animate");
        animationBox.remove();
        const mainEl =  document.querySelector(".hidden")
        mainEl.classList.remove("hidden");
    })

    bigHole.addEventListener("animationend", (event) => {
        console.log(this.event)
        
        if (this.event.animationName === 'dissipate') {
            console.log('Animation ended');
            animationBox.remove();
            const mainEl =  document.querySelector(".hidden")
            mainEl.classList.remove("hidden");
        }
        
    })
});

