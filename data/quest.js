import { getFromLocalStorage } from '../Utils/fetch.js';
import { USER } from '../Utils/constant.js';

let userData = getFromLocalStorage(USER);

export default [
    {
        id: '000',
        title: 'welcome user',
        description: `${userData.name}, Welcome to Estengrath.`
    },
    {
        id: '001',
        title: 'quest information',
        description: 'You are a struggler. You have made your way through life rolling with the punches. You make the most grizzled of champions wince with pain at the weight of decisions you\'ve made. And so you will make many more difficult decisions. The last thing you remember is being ambushed by a local cabal of thieves.'

    },
    {
        id: '002',
        title: 'old man',
        description: '"I\'m sure you don\'t remember, but I saved you. I know how you can repay me. It just so happens that I need some errands run. There are three of them in fact. Here is a map of where all of my errands are located."',
        img: '../assets/pixel-master-roshi.png'
    },
    {
        id: '003',
        title: 'rules',
        description: '"The rules are simple. As long as you have energy you are able to perform activities. Some activities will require you to spend gold. ammount will change depending on what actions you make during the game. Your character is better at some things than others."'
        
    },    
];