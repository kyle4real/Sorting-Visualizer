const selectionSort = (currentSet) => {
    const animations = [];
    // SWAP HELPER
    const swap = (arr, inx1, inx2) => {
        [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
    };
    const len = currentSet.length;
    const arr = [...currentSet];
    for (let i = 0; i < len; i++) {
        let lowest = i;
        for (let j = i + 1; j < len; j++) {
            // set both to checking
            animations.push([lowest, j, null]);
            if (arr[lowest] > arr[j]) {
                // set first to initial, second to checking
                animations.push([lowest, j]);
                lowest = j;
            }
            // set first to initial, second to checking
            animations.push([j, lowest]);
        }
        // at end of iteration, set the lowest and i to checking
        animations.push([i, lowest, null]);
        if (lowest !== i) {
            // swap heights and change color to swapping
            animations.push([i, arr[i], lowest, arr[lowest]]);
            swap(arr, i, lowest);
        } else {
            // or dont...
            animations.push([]);
        }
        // set i to sorted color
        animations.push([i]);
    }
    return animations;
};

export default selectionSort;

// if the array has 2 values, set color to checking
// if array empty, do nothing
