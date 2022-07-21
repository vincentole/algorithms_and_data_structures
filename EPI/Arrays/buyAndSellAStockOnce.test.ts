import { buyAndSellStockOnce, buyAndSellStockOnce2 } from './buyAndSellAStockOnce';

describe('Arrays', () => {
    describe('buy and sell a stock once', () => {
        it('returns the max profit', () => {
            const prices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];
            const attempt = buyAndSellStockOnce(prices);
            expect(attempt).toBe(30);
        });
    });
    describe('buy and sell a stock once 2', () => {
        it('returns the max profit', () => {
            const prices = [310, 315, 275, 295, 260, 270, 290, 230, 255, 250];
            const attempt = buyAndSellStockOnce2(prices);
            expect(attempt).toBe(30);
        });
    });
});
