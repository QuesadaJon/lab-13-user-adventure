//function to put objects into local storage
export function setInLocalStorage(key, value) {
    const stringyItem = JSON.stringify(value);
    localStorage.setItem(key, stringyItem);
    return value;
}
//function to get objects from local storage
export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}
//function to find and object in an array by its id
export function findById(array, id) {
    for (let i = 0; i < array.length; i ++) {
        const item = array[i];
        if (item.id === id)
            return item;
    }
}