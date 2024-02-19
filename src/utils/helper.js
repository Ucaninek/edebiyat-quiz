export function shuffle(array) {
    const newArray = array.slice(); // Create a copy of the original array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export var is_same = (array1, array2) => (array1.length == array2.length) && array1.every(function (element, index) {
    return element === array2[index];
});