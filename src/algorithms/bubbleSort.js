const bubbleSort = (currentSet) => {
    const animations = [];
    // SWAP HELPER
    const swap = (arr, inx1, inx2) => {
        [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
    };
    // END SWAP HELPER
    const arr = [...currentSet];
    for (let i = currentSet.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            animations.push([j, j + 1]);
            if (arr[j] > arr[j + 1]) {
                animations.push([j, arr[j], j + 1, arr[j + 1]]);
                swap(arr, j, j + 1);
            } else {
                animations.push([]);
            }
            animations.push([j, j + 1]);
        }
    }
    return animations;
};

export default bubbleSort;
