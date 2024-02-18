//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
export function shuffle(arr) {
    let i = 0,
        res = [],
        index

    while (i <= arr.length - 1) {
        index = Math.floor(Math.random() * arr.length)

        if (!res.includes(arr[index])) {
            res.push(arr[index])
            i++
        }
    }

    return res
}

export var is_same = (array1, array2) => (array1.length == array2.length) && array1.every(function (element, index) {
    return element === array2[index];
});