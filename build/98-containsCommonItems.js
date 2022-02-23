#!/usr/bin/node
"use strict";
var ContainsCommonItemNameSpace;
(function (ContainsCommonItemNameSpace) {
    // Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
    //For Example:
    //const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
    //should return false.
    //-----------
    //const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
    //should return true.
    // 2 parameters - arrays - no size limit
    // return true or false
    const array1 = ['a', 'b', 'c', 'x'];
    const array2 = ['z', 'y', 'a'];
    function containsCommonItem(arr1, arr2) {
        for (const item1 of array1) {
            for (const item2 of arr2) {
                if (item1 == item2) {
                    return true;
                }
            }
        }
        return false;
    }
    //time  complexity: O(n * m)
    //space complexity: O(1)
    function containsCommonItem2(arr1, arr2) {
        const set = new Set(arr1);
        for (const item2 of arr2) {
            if (set.has(item2)) {
                return true;
            }
        }
        return false;
    }
    //time  complexity: O(n + m)
    //space complexity: O(n)
    function containsCommonItem3(arr1, arr2) {
        return arr1.some((item1) => arr2.includes(item1));
    }
    //time  complexity:
    //space complexity:
    console.log(containsCommonItem(array1, array2));
    console.log(containsCommonItem2(array1, array2));
    console.log(containsCommonItem3(array1, array2));
})(ContainsCommonItemNameSpace || (ContainsCommonItemNameSpace = {}));
