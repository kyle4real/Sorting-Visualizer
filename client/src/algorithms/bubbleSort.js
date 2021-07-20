const bubbleSort = (currentSet, setCurrentSet, dataAmount) => {
    // SWAP HELPER
    const swap = (arr, inx1, inx2) => {
        [arr[inx1], arr[inx2]] = [arr[inx2], arr[inx1]];
    };
    // END SWAP HELPER
    // let arr = [...currentSet];
    // let id;
    // let i = dataAmount;
    // let j = 0;
    // const runAlg = () => {
    //     if (i > 0) {
    //         // console.log("i:", i);
    //         if (j < i - 1) {
    //             // console.log("j:", j);
    //             console.log(arr[j].height, arr[j + 1].height);
    //             if (arr[j].height > arr[j + 1].height) swap(arr, j, j + 1);
    //             j++;
    //         } else {
    //             i--;
    //             j = 0;
    //         }
    //     } else {
    //         clearInterval(id);
    //     }
    //     console.log("hi");
    //     setCurrentSet(arr);
    // };
    // id = setInterval(runAlg, 100);
    const arr = [...currentSet];
    for (let i = dataAmount; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j].height > arr[j + 1].height) swap(arr, j, j + 1);
        }
    }
    setCurrentSet(arr);
};

export default bubbleSort;
