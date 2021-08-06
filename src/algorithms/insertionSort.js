const insertionSort = (currentSet) => {
    const animations = [];
    const arr = [...currentSet];
    console.log(arr);
    for (var i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            // compare
            animations.push(["compare", j, j + 1]);
            if (arr[j] < currentVal) break;
            // swap
            animations.push(["swap", j, currentVal, j + 1, arr[j]]);
            arr[j + 1] = arr[j];
        }
        if (arr[j + 1] !== currentVal) {
            animations.push(["insert", j + 1, currentVal]);
            arr[j + 1] = currentVal;
        }
    }
    console.log(arr);
    return animations;
};

export default insertionSort;
