function incrementArbitraryPrecisionInteger(array: number[]) {
    let carryOver = 0;
    let i = array.length - 1;

    do {
        carryOver = array[i] === 9 ? 1 : 0;
        array[i] = (array[i] + 1) % 10;

        if (i === 0 && carryOver === 1) {
            carryOver = 0;
            array[0] = 1;
            array.push(0);
        }

        i--;
    } while (carryOver > 0);

    return array;
}

export default incrementArbitraryPrecisionInteger;
