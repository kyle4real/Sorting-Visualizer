export const randomDataSet = (dataAmount = 50) => {
    const data = [];
    for (let i = 0; i < dataAmount; i++) {
        // const newObj = {
        //     id: Math.round(Math.random() * 1000000),
        //     height: Math.round(Math.random() * (100 - 3 + 1) + 3),
        // };
        const bar = Math.round(Math.random() * (100 - 3 + 1) + 3);
        data.push(bar);
    }
    return data;
};
export const nearlySortedDataSet = (dataAmount = 50) => {
    const sorted = randomDataSet(dataAmount).sort((a, b) => a - b);
    for (let i = 0; i < Math.round(dataAmount * 0.2); i++) {
        let inx1 = 0;
        let inx2 = 0;
        while (inx1 === inx2) {
            inx1 = Math.floor(Math.random() * dataAmount);
            inx2 = Math.floor(Math.random() * dataAmount);
        }
        [sorted[inx1], sorted[inx2]] = [sorted[inx2], sorted[inx1]];
    }
    return sorted;
};
