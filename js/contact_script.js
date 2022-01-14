window.addEventListener('load', (event) => {
    var mail_a = document.getElementById("mail");
    var body_el = document.querySelector("body");
    
    // code for fade in
    const mainEl =  document.querySelector(".hidden_main")
    try {
        mainEl.classList.remove("hidden_main");
    }
    catch {};

    // code for copying mail to clipboard
    mail_a.addEventListener('click', (event) => {
        navigator.clipboard.writeText("safrata@protonmail.com");
        var hint_p = document.createElement("p");
        hint_p.className = "hint";
        hint_p.innerHTML = "copied to clipboard"
        hint_p.style.fontSize = '32px';
        hint_p.style.textDecoration = 'none';
        hint_p.style.zIndex = '2'
        hint_p.style.padding = '5px'
        hint_p.style.border = '1px solid #CC7722'
        hint_p.style.backgroundColor = '#000000';
        hint_p.style.position = 'fixed'
        hint_p.style.width = '227px';
        hint_p.style.left = '50%';
        hint_p.style.marginLeft = '-119px';
        hint_p.style.top = '1.5vh';
        body_el.appendChild(hint_p);
        hint_p.addEventListener('animationend', () => {
            hint_p.remove()
        })
    })
});

