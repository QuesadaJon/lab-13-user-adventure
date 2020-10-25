import characters from '../data/characters.js';
import { renderCharacters } from '../Utils/render-character.js';
import { setInLocalStorage, findById } from '../Utils/fetch.js';
import { USER } from '../Utils/constant.js';
// import functions and grab DOM elements
const radios = document.querySelectorAll('input');
const imgs = document.querySelectorAll('img');
const button = document.getElementById('start-button');
const userInput = document.getElementById('user-name');

// initialize userData
let userData = {
    name: {},
    id: {},
    gold: {},
    energy: {}
            
};

//generate available characters for user to choose from
renderCharacters(radios, imgs, characters);


//radios will pull character data and supply user with information based on selected character class
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', (e) => {
        const characterId = e.target.value;
        const characterChecked = findById(characters, characterId);
        return characterChecked;
    });
}

//button to finalize character selection and submit name
button.addEventListener('click', () => {
    //take selected radio
    const checked = document.querySelector(':checked');
    //inject user input into userData
    const userName = userInput.value;
    userData.name = userName;
    //find character data with earlier radio button reference
    const characterChecked = findById(characters, checked.value);
    //inject user selected class values into userData
    const userClass = characterChecked.id;
    userData.id = userClass;
    
    const userGold = characterChecked.gold;
    userData.gold = userGold;

    const userEnergy = characterChecked.energy;
    userData.energy = userEnergy;
   
    setInLocalStorage(USER, userData);

    document.location = '../worldmap/index.html';
});