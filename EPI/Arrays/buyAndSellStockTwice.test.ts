import { buyAndSellStockTwice, buyAndSellStockTwice2 } from './buyAndSellStockTwice';

describe('Arrays', () => {
    describe('buy and sell a stock twice', () => {
        it('returns the max profit from buying and selling a stock max twice', () => {
            const prices = [12, 11, 13, 9, 12, 8, 14, 13, 15];
            const attempt = buyAndSellStockTwice(prices);
            expect(attempt).toBe(10);
        });
        it('returns the max profit from buying and selling a stock max twice', () => {
            const prices = [3, 3, 5, 0, 0, 3, 1, 4];
            const attempt = buyAndSellStockTwice(prices);
            expect(attempt).toBe(6);
        });
    });
    describe('buy and sell a stock twice 2', () => {
        it('returns the max profit from buying and selling a stock max twice', () => {
            const prices = [12, 11, 13, 9, 12, 8, 14, 13, 15];
            const attempt = buyAndSellStockTwice2(prices);
            expect(attempt).toBe(10);
        });
        it('returns the max profit from buying and selling a stock max twice', () => {
            const prices = [3, 3, 5, 0, 0, 3, 1, 4];
            const attempt = buyAndSellStockTwice2(prices);
            expect(attempt).toBe(6);
        });
    });
});
