import { getFromLocalStorage } from '../Utils/fetch.js';
import { renderQuest } from '../Utils/render-functions.js';

const main = document.getElementById('main');

const intro = renderQuest();
main.append(intro);