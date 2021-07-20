import React, { useEffect, useState } from "react";
import Bars from "./Bars/Bars";
import Controls from "./Controls/Controls";
import SetupProgress from "./SetupProgress/SetupProgress";
import styles from "./Sorting.module.scss";

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

const Sorting = ({ sortSelection, dataSelection, dataAmount }) => {
    const [dataSet, setDataSet] = useState(newSet);

    useEffect(() => {
        setDataSet(() => newSet(dataAmount));
    }, [dataAmount]);

    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}>
                <SetupProgress sortSelection={sortSelection} dataSelection={dataSelection} />
                <Bars dataSet={dataSet} dataAmount={dataAmount} />
                <Controls setDataSet={setDataSet} newSet={newSet} dataAmount={dataAmount} />
            </div>
        </div>
    );
};

export default Sorting;
