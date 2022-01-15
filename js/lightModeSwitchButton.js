window.addEventListener('load', (event) => {
    // Variables
    const buttonSwitchMode = document.getElementById('mode_switch')
    const dayHolder = document.getElementById('icon_holder_day')
    const daySVG = document.getElementById('day_mode')
    const nightHolder = document.getElementById('icon_holder_night')
    const nightSVG = document.getElementById('night_mode')
    const htmlEL = document.querySelector('html')
    const localStorage = window.localStorage;
    var lightState = localStorage.getItem('lightMode');
    // functions
    
    // checks if user picked day as their mode of choice - if yes changes default moon icon for day icon
    if (localStorage.getItem('lightMode') === 'day') {
        nightHolder.classList.remove('show')
        nightHolder.classList.add('hidden')
        dayHolder.classList.remove('hidden')
        dayHolder.classList.add('show')
    }

    // adds and removes classes that look after smooth removal of an icon and of adding day class to html
    const animation_out = (current_mode) => {
        if (current_mode === 'night') {
            nightHolder.classList.remove('show')
            nightHolder.classList.add('hidden')
            nightHolder.classList.remove('animate_out');
            dayHolder.classList.remove('hidden')
            dayHolder.classList.add('show')
            htmlEL.classList.add('day')
            localStorage.setItem('lightMode', 'day'); // sets day to local storage, for remebering the choice even after page switches
        } else if (current_mode === 'day') {
            dayHolder.classList.remove('show')
            dayHolder.classList.add('hidden')
            dayHolder.classList.remove('animate_out');
            nightHolder.classList.remove('hidden')
            nightHolder.classList.add('show')
            htmlEL.classList.remove('day')
            localStorage.setItem('lightMode', 'night'); // sets night to local storage, for remebering the choice even after page switches
        }
    }
    // adds and removes classes that look after smooth appearence of a icon
    const animation_in = (current_mode) => {
        if (current_mode === 'night') {
            nightHolder.classList.remove('hidden')
            nightHolder.classList.add('show')
            nightHolder.classList.remove('animate_in');
        } else if (current_mode === 'day') {
            dayHolder.classList.remove('hidden')
            dayHolder.classList.add('show')
            dayHolder.classList.remove('animate_in');
        }
    }

    // action handlers

    // adds and day/night mode button handler
    // first after click the icon animates out, then after animation ends, the other icon animates in
    buttonSwitchMode.addEventListener('click', (event) => {
        if (nightHolder.classList.contains('show') && !(nightHolder.classList.contains('animate_out') || nightHolder.classList.contains('animate_in') || dayHolder.classList.contains('animate_out') || dayHolder.classList.contains('animate_in'))) {
            nightHolder.classList.add('animate_out');
            nightHolder.addEventListener("animationend", (event) => animation_out('night'), {once: true})
            dayHolder.classList.add('animate_in');
            dayHolder.addEventListener("animationend", (event) => animation_in('day'), {once: true})
        } else if (dayHolder.classList.contains('show')&& !(nightHolder.classList.contains('animate_out') || nightHolder.classList.contains('animate_in') || dayHolder.classList.contains('animate_out') || dayHolder.classList.contains('animate_in'))){
            dayHolder.classList.add('animate_out');
            dayHolder.addEventListener("animationend", (event) => animation_out('day'), {once: true})
            nightHolder.classList.add('animate_in');
            nightHolder.addEventListener("animationend", (event) => animation_in('night'), {once: true})
        }
    });
});
