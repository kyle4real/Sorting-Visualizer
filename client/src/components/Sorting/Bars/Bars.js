import React, { useEffect, useState } from "react";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

// Algorithm Imports
import bubbleSort from "../../../algorithms/bubbleSort";
import selectionSort from "../../../algorithms/selectionSort";
import insertionSort from "../../../algorithms/insertionSort";
// end Algorithm Imports

// Animations import
import { bubbleSortAnimate } from "../../../animations/animations";

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

const MS_ANIMATION_SPEED = 1;

const MAX_HEIGHT = 100;

const Bars = ({ dataSet, dataAmount, sortingOn, setSortingOn, sortSelection, dataSelection }) => {
    // const [animations, setAnimations] = useState([]);

    useEffect(() => {
        if (sortingOn) {
            if (sortSelection === "Bubble Sort") {
                var animations = bubbleSort(dataSet, dataAmount);
                const onFinish = () => {
                    console.log("done");
                    setSortingOn(false);
                };
                bubbleSortAnimate(animations, MS_ANIMATION_SPEED, MAX_HEIGHT, onFinish);
            } else if (sortSelection === "Selection Sort") {
                selectionSort(dataSet);
            } else if (sortSelection === "Insertion Sort") {
                insertionSort(dataSet);
            } else {
                console.log("error");
            }
        }
    }, [sortingOn, sortSelection, dataSet, dataAmount, setSortingOn]);

    return (
        <div className={styles["bars-container"]}>
            <div
                className={styles["bars"]}
                style={{ gridTemplateColumns: `repeat(${dataAmount.length}, 1fr)` }}
            >
                {dataSet.map(({ id, height, color }) => (
                    <Bar
                        key={id}
                        height={height}
                        color={color}
                        opacity={dataSelection && sortSelection ? 1 : 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bars;
