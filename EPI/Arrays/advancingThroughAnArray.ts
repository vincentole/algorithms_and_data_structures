function advancingThroughAnArray(arr: number[]) {
    const lastIndex = arr.length - 1;
    const indexStack = [0];

    while (indexStack.length > 0) {
        if (indexStack[indexStack.length - 1] == lastIndex) {
            return true;
        }

        const currIndex = indexStack.pop();
        if (currIndex === undefined) return false;
        for (let i = 1; i <= arr[currIndex]; i++) {
            indexStack.push(i + currIndex);
        }
    }

    return false;
}
function advancingThroughAnArray2(arr: number[]) {
    let furthestReachSoFar = 0;
    const lastIndex = arr.length - 1;

    let i = 0;
    while (i <= furthestReachSoFar && furthestReachSoFar < lastIndex) {
        furthestReachSoFar = Math.max(furthestReachSoFar, arr[i] + i);
        i++;
    }

    return furthestReachSoFar >= lastIndex;
}

export { advancingThroughAnArray, advancingThroughAnArray2 };
