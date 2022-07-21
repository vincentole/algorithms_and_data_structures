function palindromicPermutations(string: string) {
    if (string.length <= 0) return false;

    const map = new Set<string>();
    for (let char of string) {
        if (map.has(char)) map.delete(char);
        else map.add(char);
    }
    return map.size <= 1;
}

export default palindromicPermutations;
