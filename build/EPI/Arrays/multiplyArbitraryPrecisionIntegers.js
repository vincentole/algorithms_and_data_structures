function multiplyArbitraryPrecisionIntegers(arr1, arr2) {
    const sign = Math.sign(arr1[0]) * Math.sign(arr2[0]);
    arr1[0] = Math.abs(arr1[0]);
    arr2[0] = Math.abs(arr2[0]);
    let result = Array(arr1.length + arr2.length).fill(0);
    for (let i = arr1.length - 1; i >= 0; i--) {
        for (let j = arr2.length - 1; j >= 0; j--) {
            result[i + j + 1] += arr1[i] * arr2[j];
            result[i + j] += Math.floor(result[i + j + 1] / 10);
            result[i + j + 1] %= 10;
        }
    }
    let zeroIndex = -1;
    while (result[zeroIndex + 1] === 0) {
        zeroIndex++;
    }
    result = zeroIndex >= 0 ? result.slice(zeroIndex + 1) : result;

    if (result.length === 0) {
        return 0;
    } else {
        result[0] = result[0] * sign;
        return result;
    }
}

export default multiplyArbitraryPrecisionIntegers;
