import quest from '../data/quest.js';

//function to take in radio and img, tags, and character data in order to assign the character ids to radio tags and img sources
export function renderCharacters(radios, imgs, characters) {
    radios[0].value = characters[0].id;
    radios[1].value = characters[1].id;
    radios[2].value = characters[2].id;

    imgs[0].src = characters[0].img;
    imgs[1].src = characters[1].img;
    imgs[2].src = characters[2].img;
}

export function renderQuest() {
    const div = document.createElement('div');
    const textDisplay = document.createElement('div');
    const oldMan = document.createElement('img');
    const map = document.createElement('img');


    div.classList = 'quest-render';
    textDisplay.classList = 'user-welcome';
    oldMan.classList = 'old-man ';
    map.classList = 'map';
   
    setTimeout(() => {
        textDisplay.textContent = quest[0].description; 
    }, 1000);

    setTimeout(() => {
        textDisplay.textContent = quest[1].description; 
    }, 9000);

    setTimeout(() => {
        textDisplay.textContent = quest[2].description;
        
        oldMan.src = quest[2].img; 
        oldMan.style.display = 'initial';
    }, 18000);

    setTimeout(() => {
        textDisplay.textContent = quest[3].description; 
    }, 24000);

    setTimeout(() => {
        document.location = '../map/index.html';

    }, 28000);


    div.append(oldMan, textDisplay);
    

    return div;
}