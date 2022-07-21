import baseConversion from './baseConversion';

describe('Strings', () => {
    describe('base conversion', () => {
        it('converts a string from base1 to base2', () => {
            const attempt1 = baseConversion('615', 7, 13);
            expect(attempt1).toBe('1a7');
        });
    });
});
