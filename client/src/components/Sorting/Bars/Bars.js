import React, { useEffect, useState } from "react";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

// const data = [
//     { id: 1, height: 50 },
//     { id: 2, height: 24 },
//     { id: 3, height: 87 },
//     { id: 4, height: 92 },
//     { id: 5, height: 37 },
//     { id: 6, height: 3 },
//     { id: 7, height: 13 },
//     { id: 8, height: 69 },
// ];

const newSet = (dataAmount = 50) => {
    const data = [];
    for (let i = 0; i < dataAmount; i++) {
        const newObj = {
            id: Math.round(Math.random() * 1000000),
            height: Math.round(Math.random() * 100) + 1,
        };
        data.push(newObj);
    }
    return data;
};

const Bars = ({ dataAmount }) => {
    const [dataSet, setDataSet] = useState(newSet);

    useEffect(() => {
        setDataSet(() => newSet(dataAmount));
    }, [dataAmount]);

    return (
        <div className={styles["bars-container"]}>
            <div
                className={styles["bars"]}
                style={{ gridTemplateColumns: `repeat(${dataAmount.length}, 1fr)` }}
            >
                {dataSet.map(({ id, height }) => (
                    <Bar key={id} height={height} />
                ))}
            </div>
        </div>
    );
};

export default Bars;
