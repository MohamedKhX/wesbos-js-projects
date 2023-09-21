import {cssColors, isColorDark, isValidColor} from "./data/colors.js";

const container = document.querySelector('.container')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
    const recognition =  new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handle;
    recognition.start()
}

function renderColorsHtml() {
    let html = ``
    Object.entries(cssColors)
        .forEach(function(entry, index, arr) {
       const colorName = entry[0];
       const color = entry[1];
       html += spanHtml(color, colorName);
    })

    container.innerHTML = html;
}

function spanHtml(color, colorName) {
    return `<span class="py-1 px-2 flex-grow text-center text-lg cursor-pointer button
                            ${colorName} 
                            ${isColorDark(color) ? 'text-white' : 'text-black'}"
                 style="background-color: ${color}"> ${colorName}</span>`
}

function handle( {results} ) {
    const words = results[results.length - 1][0].transcript;
    let color = words.toLowerCase();
    color = color.replace(/\s|\./g, '');

    if(!isValidColor(color)) return;

    const colorEl = document.querySelector(`.${color}`)
    colorEl.classList.add('line-through', 'decoration-2', 'got');
    document.body.style.backgroundColor = color;
}

start()
renderColorsHtml()
