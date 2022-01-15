const localStorage = window.localStorage;
const lightState = localStorage.getItem('lightMode');
const htmlEL = document.querySelector('html')

if (localStorage.getItem('lightMode') === null) {
    localStorage.setItem('lightMode', 'night')
} else if (localStorage.getItem('lightMode') === 'day') {
    htmlEL.classList.add('day')
} else if (localStorage.getItem('lightMode') === 'night') {
    localStorage.setItem('lightMode', 'night')
}