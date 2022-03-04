export default function theDutchNationalFlagProblem(array, pivotIndex) {
    let lower = 0;
    let equal = 0;
    let higher = array.length;
    let pivot = array[pivotIndex];
    while (equal < higher) {
        if (array[equal] < pivot) {
            [array[equal], array[lower]] = [array[lower], array[equal]];
            equal++;
            lower++;
        }
        else if (array[equal] > pivot) {
            higher--;
            [array[equal], array[higher]] = [array[higher], array[equal]];
        }
        else {
            equal++;
        }
    }
    return array;
}
