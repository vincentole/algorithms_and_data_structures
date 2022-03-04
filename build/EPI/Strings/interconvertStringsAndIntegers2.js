function toString(num) {
    let result = '';
    const sign = num < 0 ? '-' : '';
    num = Math.abs(num);
    while (num > 0) {
        result = String.fromCharCode((num % 10) + 48) + result;
        num = Math.floor(num / 10);
    }
    return sign + result;
}
function toInteger(str) {
    const sign = str[0] === '-' ? -1 : 1;
    str = str[0] === '-' ? str.slice(1) : str;
    return (sign *
        str
            .split('')
            .map((num) => num.charCodeAt(0) - 48)
            .reduce((total, num) => total * 10 + num, 0));
}
export { toString, toInteger };
