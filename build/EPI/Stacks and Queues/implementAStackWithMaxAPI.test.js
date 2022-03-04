import Stack from './implementAStackWithMaxAPI2';
describe('Stacks and Queues', () => {
    describe('Implement a stack with max API', () => {
        it('has a working push method', () => {
            const myStack = new Stack();
            myStack.push(1);
            myStack.push(4);
            expect(myStack.data).toEqual([1, 4]);
        });
        it('has a working pop method', () => {
            const myStack = new Stack();
            myStack.push(1);
            myStack.push(4);
            const pop1 = myStack.pop();
            expect(pop1).toEqual(4);
            expect(myStack.data).toEqual([1]);
            myStack.pop();
            const pop2 = myStack.pop();
            expect(pop2).toEqual(null);
            expect(myStack.data).toEqual([]);
        });
        it('has a working max method', () => {
            const myStack = new Stack();
            myStack.push(1);
            myStack.push(4);
            let max = myStack.max();
            expect(max).toEqual(4);
            myStack.push(5);
            myStack.push(5);
            // [1,4,5,5]
            max = myStack.max();
            expect(max).toEqual(5);
            myStack.pop();
            max = myStack.max();
            expect(max).toEqual(5);
            myStack.pop();
            max = myStack.max();
            expect(max).toEqual(4);
            // [1,4]
            myStack.pop();
            myStack.pop();
            max = myStack.max();
            expect(max).toEqual(null);
        });
    });
});
