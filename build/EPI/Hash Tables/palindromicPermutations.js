function palindromicPermutations(string) {
    if (string.length < 1) {
        return false;
    }
    const map = new Map();
    let numEven = 0;
    let numUnique = 0;
    for (let letter of string) {
        if (!map.has(letter)) {
            map.set(letter, 1);
            numUnique++;
        }
        else {
            map.set(letter, map.get(letter) + 1);
        }
        if (map.get(letter) >= 2 && map.get(letter) % 2 === 0) {
            numEven++;
        }
        else if (map.get(letter) >= 2 && map.get(letter) % 2 !== 0) {
            numEven--;
        }
    }
    if (string.length % 2 === 0) {
        return numEven === numUnique;
    }
    else {
        return numEven === numUnique - 1;
    }
}
export default palindromicPermutations;
