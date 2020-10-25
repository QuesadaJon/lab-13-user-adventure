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

    }
];