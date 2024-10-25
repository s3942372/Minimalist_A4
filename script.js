const screen = document.getElementById('screen');
const optionsList = document.getElementById('options-list');
const selectedOptionText = document.getElementById('selected-option');

const options = [
    "About These Works",
    "Website Design",
    "Ma",
    "Hint Fiction",
    "Oulipo",
    "My Dress Up Doll",
    "Drifting Off",
    "Punchin' Time!"
];

let currentIndex = 0;
let inOptionsMenu = true;

function updateScreen() {
    optionsList.innerHTML = options.map((option, index) => {
        return `<div class="option ${index === currentIndex ? 'highlight' : ''}">${option}</div>`;
    }).join('');
    selectedOptionText.innerHTML = `Use A to select: ${options[currentIndex]}`;
}

function openPopup(url) {
    document.getElementById('popupContent').src = url;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('popupContent').src = '';
}

updateScreen();

document.getElementById('a').addEventListener('click', () => {
    if (inOptionsMenu) {
        if (currentIndex === 0) {
            screen.innerHTML = `
                <div>
                    <p style="margin:10px;">Displayed on this website is a series of six digital works created over a period of 3 months in the 'Minimalist Interactives and Environments' course. These works were inspired by and based on several concepts related to limits and constraints, such as 'Ma', the 'Oulipo', 'Hint Fiction' and 'Persuasive Games'. From these concepts I have taken what I've learned and used my newfound knowledge to develop this series of 2D interactive works, with the goal of demonstrating how these limits and constraints have influenced my practice in interactive design over the course of the past semester. These interactive works are placed in order from the least to the most playful in terms of both design and interaction.</p>
                </div>`;
            optionsList.innerHTML = "";
            selectedOptionText.style.display = "none";
            inOptionsMenu = false;
        } else if (currentIndex === 1) {
            screen.innerHTML = `
                <div>
                    <p style="margin:10px;">This website itself is a representation of my journey in creating these works: only 3 buttons are working properly, everything is accessed through pop-ups and you constantly have to refresh to try and get something new. Again and again, it's a frustrating rinse and repeat, until finally, you (and I) have finished everything.</p>
                </div>`;
            optionsList.innerHTML = "";
            selectedOptionText.style.display = "none";
            inOptionsMenu = false;
        } else if (currentIndex === 2) {
            screen.innerHTML = `
                <div onclick="openPopup('https://s3942372.github.io/Minimalist_A1/')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to try out my 'Ma' interaction!</p>
                </div>
                <div onclick="openPopup('https://s3942372-minimalist-a4.deno.dev/Ma')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to read my reflection.</p>
                </div>`;
            optionsList.innerHTML = "";
            selectedOptionText.style.display = "none";
            inOptionsMenu = false;
        } else if (currentIndex === 3) {
            screen.innerHTML = `
                <div onclick="openPopup('https://s3942372.github.io/Minimalist_A2_P1/')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to try out my 'Hint Fiction' interaction!</p>
                </div>
                <div onclick="openPopup('https://s3942372.github.io/Minimalist_A2-1/')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to try out my original 'Hint Fiction' interaction!</p>
                </div>
                <div onclick="openPopup('https://s3942372-minimalist-a4.deno.dev/HF')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to read my reflection.</p>
                </div>`;
            optionsList.innerHTML = "";
            selectedOptionText.style.display = "none";
            inOptionsMenu = false;
        } else if (currentIndex === 4) {
            screen.innerHTML = `
                <div onclick="openPopup('https://s3942372.github.io/Minimalist_A2-2/')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to try out my 'Oulipo' interaction!</p>
                </div>
                <div onclick="openPopup('https://s3942372-minimalist-a4.deno.dev/Oulipo')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to read my reflection.</p>
                </div>`;
            optionsList.innerHTML = "";
            selectedOptionText.style.display = "none";
            inOptionsMenu = false;
        } else if (currentIndex === 5) {
            screen.innerHTML = `
                <div onclick="openPopup('https://scratch.mit.edu/projects/1074609102/embed')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to try out my game: 'My Dress Up Doll'!</p>
                </div>
                <div onclick="openPopup('https://s3942372-minimalist-a4.deno.dev/MDUD')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to read my reflection.</p>
                </div>`;
            optionsList.innerHTML = "";
            selectedOptionText.style.display = "none";
            inOptionsMenu = false;
        } else if (currentIndex === 6) {
            screen.innerHTML = `
                <div onclick="openPopup('https://scratch.mit.edu/projects/1075341974/embed')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to try out my game: 'Drifting Off'!</p>
                </div>
                <div onclick="openPopup('https://s3942372-minimalist-a4.deno.dev/DOFF')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to read my reflection.</p>
                </div>`;
            optionsList.innerHTML = "";
            selectedOptionText.style.display = "none";
            inOptionsMenu = false; 
        } else if (currentIndex === 7) {
            screen.innerHTML = `
                <div onclick="openPopup('https://scratch.mit.edu/projects/1075088739/embed')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to try out my game: 'Punchin' Time!'</p>
                </div>
                <div onclick="openPopup('https://s3942372-minimalist-a4.deno.dev/PT')" style="cursor:pointer">
                    <p style="margin:10px;">Click here to read my reflection.</p>
                </div>`;
            optionsList.innerHTML = "";
            selectedOptionText.style.display = "none";
            inOptionsMenu = false;
        } else {
            screen.innerHTML = `${options[currentIndex]} Selected!`;
            optionsList.innerHTML = ""; 
            selectedOptionText.style.display = "none"; 
            inOptionsMenu = false;
        }
    }
});

document.getElementById('b').addEventListener('click', () => {
    if (inOptionsMenu = false) {
        currentIndex = 0;
        inOptionsMenu = true;
        updateScreen();
        selectedOptionText.style.display = "none";
        screen.innerHTML = "You've gone back the way you came, the buttons still work but you can't see anything. Try refreshing. It's the only way you can advance.";
    } else {
        currentIndex = 0;
        inOptionsMenu = true;
        updateScreen();
        selectedOptionText.style.display = "none";
        screen.innerHTML = "You've gone back the way you came, the buttons still work but you can't see anything. Try refreshing. It's the only way you can advance.";
    }
});

document.getElementById('start').addEventListener('click', () => {
    screen.innerHTML = "You've started! But did you really?";
    selectedOptionText.innerHTML = "";
    optionsList.innerHTML = "";
    inOptionsMenu = True;
});

document.getElementById('select').addEventListener('click', () => {
    screen.innerHTML = "What are you selecting? There's nothing to do with this.";
    selectedOptionText.innerHTML = "";
    optionsList.innerHTML = ""; 
    inOptionsMenu = false;
});

document.getElementById('up').addEventListener('click', () => {
    if (inOptionsMenu) {
        currentIndex = (currentIndex - 1 + options.length) % options.length;
        updateScreen();
    }
});

document.getElementById('down').addEventListener('click', () => {
    if (inOptionsMenu) {
        currentIndex = (currentIndex + 1) % options.length;
        updateScreen();
    }
});
