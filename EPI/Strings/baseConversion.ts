function baseConversion(string: string, baseFrom: number, baseTo: number) {
    const base10 = parseInt(string, baseFrom);
    return base10.toString(baseTo);
}

export default baseConversion;
