export const randomDataSet = (dataAmount = 50) => {
    const data = [];
    for (let i = 0; i < dataAmount; i++) {
        const newObj = {
            id: Math.round(Math.random() * 1000000),
            height: Math.round(Math.random() * (100 - 3 + 1) + 3),
        };
        data.push(newObj);
    }
    return data;
};
export const nearlySortedDataSet = () => {};
