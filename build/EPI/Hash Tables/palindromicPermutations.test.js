import palindromicPermutations from './palindromicPermutations2';
describe('Hash Tables', () => {
    describe('Palindromic permutations', () => {
        it('returns true if the workd can be permutated into a palindrom', () => {
            const attempt1 = palindromicPermutations('aba');
            const attempt2 = palindromicPermutations('aab');
            const attempt3 = palindromicPermutations('level');
            const attempt4 = palindromicPermutations('lveel');
            const attempt5 = palindromicPermutations('foobaraboof');
            const attempt6 = palindromicPermutations('llllaaaai');
            const attempt7 = palindromicPermutations('palindrom');
            const attempt8 = palindromicPermutations('test');
            expect(attempt1).toBeTruthy();
            expect(attempt2).toBeTruthy();
            expect(attempt3).toBeTruthy();
            expect(attempt4).toBeTruthy();
            expect(attempt5).toBeTruthy();
            expect(attempt6).toBeTruthy();
            expect(attempt7).toBeFalsy();
            expect(attempt8).toBeFalsy();
        });
        it('handles empty and single letter strings', () => {
            const attempt1 = palindromicPermutations('');
            const attempt2 = palindromicPermutations('f');
            expect(attempt1).toBeFalsy();
            expect(attempt2).toBeTruthy();
        });
    });
});
