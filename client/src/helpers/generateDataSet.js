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
export const nearlySortedDataSet = () => {};
