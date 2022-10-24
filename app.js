// import functions and grab DOM elements
const headDropdown = document.getElementById('headdropdown');
const middleDropdown = document.getElementById('middledropdown');
const bottomDropdown = document.getElementById('bottomdropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
let phrases = [];

headDropdown.addEventListener('change', () => {
    console.log('changing select', headDropdown.value);
    headEl.style.backgroundImage = `url('../assets/${headDropdown.value}.png')`;
    // get the value of the head dropdown
    // increment the head change count state
    headCount++;
    displayStats();
    // update the dom for the head (use style.backgroundImage on the headEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url('../assets/${middleDropdown.value}.png')`;
    // get the value of the middle dropdown
    // increment the middle change count state
    middleCount++;
    displayStats();
    // update the dom for the middle (NOTE: use style.backgroundImage on the middleEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});

bottomDropdown.addEventListener('change', () => {
    bottomEl.style.backgroundImage = `url('../assets/${bottomDropdown.value}.png')`;
    // get the value of the bottom dropdown
    // increment the bottom change count state
    bottomCount++;
    displayStats();
    // update the dom for the bottom (NOTE use style.backgroundImage on the bottomEl div instead of trying to set the .src -- it's NOT an img tag!)
    // update the stats to show the new count (call displayStats() to do this work)
});


catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state
    phrases.push(catchphraseInput.value);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `You have clicked the head ${headCount} and the body ${middleCount} and the pants ${bottomCount}`;
    // text content of the reportEl to tell the user how many times they've changed each piece of the state
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state
    for (let phrase of phrases) {
        const list = document.createElement('div');
        list.textContent = phrase;
        catchphrasesEl.append(list);
    }
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
    
}
