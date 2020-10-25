//function to take in radio and img, tags, and character data in order to assign the character ids to radio tags and img sources
export function renderCharacters(radios, imgs, characters) {
    radios[0].value = characters[0].id;
    radios[1].value = characters[1].id;
    radios[2].value = characters[2].id;

    imgs[0].src = characters[0].img;
    imgs[1].src = characters[1].img;
    imgs[2].src = characters[2].img;
}
