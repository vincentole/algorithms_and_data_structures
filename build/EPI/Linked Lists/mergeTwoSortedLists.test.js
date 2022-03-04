import { LinkedList, mergeTwoSortedLists } from './mergeTwoSortedLists';
describe('Linked Lists', () => {
    describe('Merge two sorted lists', () => {
        let list1 = new LinkedList();
        list1.append(2);
        list1.append(5);
        list1.append(7);
        let list2 = new LinkedList();
        list2.append(3);
        list2.append(11);
        it('appends multiple elements correctly', () => {
            expect(list1.toArray()).toEqual([2, 5, 7]);
        });
        it('appends multiple elements correctly', () => {
            expect(list2.toArray()).toEqual([3, 11]);
        });
        it('appends one elements correctly', () => {
            expect(new LinkedList().append(3).toArray()).toEqual([3]);
        });
        it('merges two sorted lists of multiple items', () => {
            const result = [...list1.toArray(), ...list2.toArray()].sort((a, b) => a - b);
            const attempt = mergeTwoSortedLists(list1, list2).toArray();
            expect(attempt).toEqual(result);
        });
        it('merges two empty', () => {
            list1 = new LinkedList();
            list2 = new LinkedList();
            const result = [...list1.toArray(), ...list2.toArray()].sort((a, b) => a - b);
            const attempt = mergeTwoSortedLists(list1, list2).toArray();
            expect(attempt).toEqual(result);
        });
        it('merges list with empty list', () => {
            list1 = new LinkedList();
            list1.append(1);
            list1.append(3);
            list1.append(4);
            list2 = new LinkedList();
            const result = [...list1.toArray(), ...list2.toArray()].sort((a, b) => a - b);
            const attempt = mergeTwoSortedLists(list1, list2).toArray();
            console.log(attempt);
            expect(attempt).toEqual(result);
        });
        it('merges empty list with list', () => {
            list1 = new LinkedList();
            list2 = new LinkedList();
            list2.append(1);
            list2.append(3);
            list2.append(4);
            const result = [...list1.toArray(), ...list2.toArray()].sort((a, b) => a - b);
            const attempt = mergeTwoSortedLists(list1, list2).toArray();
            console.log(attempt);
            expect(attempt).toEqual(result);
        });
    });
});
