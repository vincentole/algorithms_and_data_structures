function toString(num) {
    let result = '';
    const sign = num < 0 ? '-' : '';
    let absNum = Math.abs(num);
    while (absNum > 0) {
        result = String.fromCharCode((absNum % 10) + 48) + result;
        absNum = Math.floor(absNum / 10);
    }
    return sign + result;
}
function toInteger(str) {
    let result = 0;
    let sign = str[0] === '-' ? -1 : 1;
    return (sign *
        str
            .split('')
            .slice(str[0] === '-' ? 1 : 0)
            .reduce((result, num) => {
            return result * 10 + num.charCodeAt(0) - 48;
        }, 0));
}
export { toString, toInteger };
