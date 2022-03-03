export default function theDutchNationalFlagProblem(array: number[], pivotIndex: number) {
    // Input = unordered array
    // Output = Array ordered around pivot
    // Breaking Points:
    //   check if index is in reange
    //   handle empty, one value, two value array
    // Naive appraoch:
    //   get index value
    //   const smaller, higher
    //   loop through array and push to smaller or higher
    //   concat both arrays
    //   time complexity: O(n)
    //   space complexity: O(n)
    // Better appraoch:
    //   index pointer
    //   newPivot pointer
    //   if indexV < pivotV: swap(newPivot, i) index++ newPivot++
    //   if indexV >= pivotV: index++,
    //   skip pivot value;
    //   time complexity: O(n);
    //   space complexity: O(1);

    // [lower, equal, unclassified, higher]
    let lower = 0; // first equal
    let equal = 0; // first unclassified
    let higher = array.length; // first higher
    // unclassified = equal:larger
    const pivot = array[pivotIndex];

    while (equal < higher) {
        if (array[equal] < pivot) {
            [array[lower], array[equal]] = [array[equal], array[lower]];
            equal++;
            lower++;
        } else if (array[equal] > pivot) {
            higher--;
            [array[higher], array[equal]] = [array[equal], array[higher]];
        } else {
            //(array[equal] === pivot)
            equal++;
        }
    }

    return array;
}
