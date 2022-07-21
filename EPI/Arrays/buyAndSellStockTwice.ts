function buyAndSellStockTwice(arr: number[]) {
    const maxFirstBuy = Array(arr.length).fill(0);
    let max = 0;
    let lowestPrice = Infinity;

    for (let [i, price] of arr.entries()) {
        lowestPrice = Math.min(lowestPrice, price);
        const currProfit = price - lowestPrice;
        max = Math.max(max, currProfit);
        maxFirstBuy[i] = max;
    }

    let highestPrice = -Infinity;
    for (let i = arr.length - 1; i > 0; i--) {
        highestPrice = Math.max(highestPrice, arr[i]);
        const currProfit = highestPrice - arr[i];
        max = Math.max(currProfit + maxFirstBuy[i - 1], max);
    }

    return max;
}

function buyAndSellStockTwice2(arr: number[]) {
    let cost1 = Infinity;
    let profit1 = 0;
    let cost2 = Infinity;
    let profit2 = 0;

    for (const price of arr) {
        cost1 = Math.min(cost1, price);
        profit1 = Math.max(profit1, price - cost1);
        cost2 = Math.min(cost2, price - profit1);
        profit2 = Math.max(profit2, price - cost2);
    }

    return profit2;
}

export { buyAndSellStockTwice, buyAndSellStockTwice2 };
