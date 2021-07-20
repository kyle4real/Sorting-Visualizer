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

const MS_ANIMATION_SPEED = 20;

const MAX_HEIGHT = 100;

const Bars = ({ dataSet, dataAmount, sortingOn, sortSelection }) => {
    // const [animations, setAnimations] = useState([]);

    useEffect(() => {
        if (sortingOn) {
            let animations;
            if (sortSelection === "Bubble Sort") {
                animations = bubbleSort(dataSet, dataAmount);
            } else if (sortSelection === "Selection Sort") {
                selectionSort(dataSet);
            } else if (sortSelection === "Insertion Sort") {
                insertionSort(dataSet);
            } else {
                console.log("error");
            }
            console.log(animations);

            for (let i = 0; i < animations.length; i++) {
                const dataBars = document.getElementsByClassName("data-bar");
                const colorChange = i % 3 !== 2;
                if (colorChange) {
                    const [barOneInx, barTwoInx] = animations[i];
                    const barOneStyling = dataBars[barOneInx].style;
                    const barTwoStyling = dataBars[barTwoInx].style;
                    const color = i % 2 === 0 ? "#1dc690" : "#278ab0";
                    setTimeout(() => {
                        barOneStyling.backgroundColor = color;
                        barTwoStyling.backgroundColor = color;
                    }, i * MS_ANIMATION_SPEED);
                } else {
                    if (!animations[i].length) continue;
                    const [barOneInx, barOneHeight, barTwoInx, barTwoHeight] = animations[i];
                    const barOneStyling = dataBars[barOneInx].style;
                    const barTwoStyling = dataBars[barTwoInx].style;
                    setTimeout(() => {
                        barOneStyling.height =
                            Math.round((barTwoHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                        barTwoStyling.height =
                            Math.round((barOneHeight / MAX_HEIGHT) * MAX_HEIGHT) + "%";
                    }, i * MS_ANIMATION_SPEED);
                }
            }
        }
    }, [sortingOn, sortSelection, dataSet, dataAmount]);

    console.log(styles.$primary);

    return (
        <div className={styles["bars-container"]}>
            <div
                className={styles["bars"]}
                style={{ gridTemplateColumns: `repeat(${dataAmount.length}, 1fr)` }}
            >
                {dataSet.map(({ id, height, color }) => (
                    <Bar key={id} height={height} color={color} />
                ))}
            </div>
        </div>
    );
};

export default Bars;
