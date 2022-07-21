function buyAndSellStockOnce(arr: number[]) {
    let max = 0;
    let buyIndex = 0;

    for (const [i, price] of arr.entries()) {
        const currReturn = price - arr[buyIndex];
        max = Math.max(max, currReturn);
        if (currReturn <= 0) {
            buyIndex = i;
        }
    }

    return max;
}

function buyAndSellStockOnce2(arr: number[]) {
    let max = 0;
    let minPrice = Infinity;

    for (const price of arr) {
        const currReturn = price - minPrice;
        max = Math.max(max, currReturn);
        minPrice = Math.min(minPrice, price);
    }

    return max;
}

export { buyAndSellStockOnce, buyAndSellStockOnce2 };
