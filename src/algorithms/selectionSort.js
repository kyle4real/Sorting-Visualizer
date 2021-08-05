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
            animations.push([j]);
            if (arr[lowest] > arr[j]) {
                animations.push([lowest, j]);
                lowest = j;
            }
        }
        if (lowest !== i) {
            animations.push([i, arr[i], lowest, arr[lowest]]);
            swap(arr, i, lowest);
        } else {
            animations.push([]);
        }
    }
    return animations;
};

export default selectionSort;
