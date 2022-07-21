function baseConversion(string, baseFrom, baseTo) {
    const base10 = parseInt(string, baseFrom);
    return base10.toString(baseTo);
}
export default baseConversion;
