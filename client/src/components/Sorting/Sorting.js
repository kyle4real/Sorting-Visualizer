import React, { useEffect, useState, useContext } from "react";
import Bars from "./Bars/Bars";
import Controls from "./Controls/Controls";
import SetupProgress from "./SetupProgress/SetupProgress";
import styles from "./Sorting.module.scss";

import { randomDataSet } from "../../helpers/generateDataSet";

// Algorithm Imports
import bubbleSort from "../../algorithms/bubbleSort";
import selectionSort from "../../algorithms/selectionSort";
import insertionSort from "../../algorithms/insertionSort";
// end Algorithm Imports

// Animations import
import { bubbleSortAnimate, refreshAnimate } from "../../animations/animations";
import SortContext from "../../store/sort-context";

const Sorting = ({ sortingOn, setSortingOn }) => {
    const sortCtx = useContext(SortContext);

    const [speed, setSpeed] = useState(150);
    const [dataSet, setDataSet] = useState(() => randomDataSet());
    const [timers, setTimers] = useState(null);

    useEffect(() => {
        setDataSet(() => randomDataSet(sortCtx.dataAmount));
    }, [sortCtx.dataAmount]);

    const handlePlay = () => {
        if (sortCtx.sortSelection === "Bubble Sort") {
            var animations = bubbleSort(dataSet, sortCtx.dataAmount);
            const onFinish = () => {
                setSortingOn(false);
            };
            const timers = bubbleSortAnimate(animations, 302 - speed, onFinish);
            setTimers(timers);
        } else if (sortCtx.sortSelection === "Selection Sort") {
            selectionSort(dataSet);
        } else if (sortCtx.sortSelection === "Insertion Sort") {
            insertionSort(dataSet);
        } else {
            console.log("error");
        }
    };

    const handleStop = () => {
        if (timers === null) return;
        for (let i = 0; i < timers.length; i++) {
            clearTimeout(timers[i]);
        }
        refreshAnimate();
        setDataSet(() => randomDataSet(sortCtx.dataAmount));
        setTimers(null);
    };

    // useEffect(() => {
    //     if (sortingOn) {

    //     } else if (timers !== null) {

    //     }
    // }, [sortingOn, sortSelection, dataSet, dataAmount, setSortingOn, speed, timers]);

    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}>
                <SetupProgress />
                <Bars dataSet={dataSet} />
                <Controls
                    setDataSet={setDataSet}
                    newSet={randomDataSet}
                    dataAmount={sortCtx.dataAmount}
                    sortingOn={sortingOn}
                    setSortingOn={setSortingOn}
                    speed={speed}
                    setSpeed={setSpeed}
                    handlePlay={handlePlay}
                    handleStop={handleStop}
                />
            </div>
        </div>
    );
};

export default Sorting;
