import React, { useEffect, useState } from "react";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

// Algorithm Imports
import bubbleSort from "../../../algorithms/bubbleSort";
import selectionSort from "../../../algorithms/selectionSort";
import insertionSort from "../../../algorithms/insertionSort";
// end Algorithm Imports

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

const Bars = ({ dataSet, dataAmount, sortingOn, sortSelection }) => {
    const [currentSet, setCurrentSet] = useState(dataSet);

    useEffect(() => {
        if (sortingOn) {
            if (sortSelection === "Bubble Sort") {
                bubbleSort(setCurrentSet);
            } else if (sortSelection === "Selection Sort") {
                selectionSort(setCurrentSet);
            } else if (sortSelection === "Insertion Sort") {
                insertionSort(setCurrentSet);
            } else {
                console.log("error");
            }
        }
    }, [sortingOn, sortSelection]);

    return (
        <div className={styles["bars-container"]}>
            <div
                className={styles["bars"]}
                style={{ gridTemplateColumns: `repeat(${dataAmount.length}, 1fr)` }}
            >
                {currentSet.map(({ id, height }) => (
                    <Bar key={id} height={height} />
                ))}
            </div>
        </div>
    );
};

export default Bars;
