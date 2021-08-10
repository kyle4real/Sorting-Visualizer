import React, { useEffect, useState, useContext } from "react";
import Bars from "./Bars/Bars";
import Controls from "./Controls/Controls";
import SetupProgress from "./SetupProgress/SetupProgress";
import styles from "./Sorting.module.scss";

import { randomDataSet } from "../../helpers/generateDataSet";

import SortContext from "../../store/sort-context";

import bubbleSort from "./../../algorithms/bubbleSort";
import {
    bubbleSortAnimate,
    insertionSortAnimate,
    refreshAnimate,
    selectionSortAnimate,
} from "../../animations/animations";
import selectionSort from "../../algorithms/selectionSort";
import insertionSort from "../../algorithms/insertionSort";

// temp data set
const tempData = [30, 60, 10, 40, 50, 20, 70, 5, 90, 100];

const Sorting = () => {
    const sortCtx = useContext(SortContext);
    const [dataSet, setDataSet] = useState(() => randomDataSet());
    const [animations, setAnimations] = useState(null);
    const [timers, setTimers] = useState(null);
    const [speed, setSpeed] = useState(201);

    const speedChangeHandler = (num) => {
        const newSpeed = 201 - 2 * num;
        setSpeed(newSpeed);
    };

    useEffect(() => {
        setDataSet(() => randomDataSet(sortCtx.dataAmount));
    }, [sortCtx.dataAmount]);

    useEffect(() => {
        if (sortCtx.dataAmount && sortCtx.sortSelection && sortCtx.dataSelection) {
            let animation;
            if (sortCtx.sortSelection === "Bubble Sort") {
                animation = bubbleSort(dataSet);
            } else if (sortCtx.sortSelection === "Selection Sort") {
                animation = selectionSort(dataSet);
            } else if (sortCtx.sortSelection === "Insertion Sort") {
                animation = insertionSort(dataSet);
            }
            console.log(animation);
            setAnimations(animation);
        }
    }, [sortCtx.dataAmount, sortCtx.sortSelection, sortCtx.dataSelection, dataSet]);

    const handlePlay = () => {
        let timerArr;
        if (sortCtx.sortSelection === "Bubble Sort") {
            timerArr = bubbleSortAnimate(animations, speed, null, sortCtx.dataAmount);
        } else if (sortCtx.sortSelection === "Selection Sort") {
            timerArr = selectionSortAnimate(animations, speed, null, sortCtx.dataAmount);
        } else if (sortCtx.sortSelection === "Insertion Sort") {
            timerArr = insertionSortAnimate(animations, speed, null, sortCtx.dataAmount);
        }
        setTimers(timerArr);
    };

    const handleReset = () => {
        for (let i = 0; i < timers.length; i++) {
            clearInterval(timers[i]);
        }
        setTimers(null);
        refreshAnimate();
        setDataSet(() => randomDataSet(sortCtx.dataAmount));
    };

    return (
        <div className={styles.sorting__container}>
            <div className={`container ${styles.sorting}`}>
                <SetupProgress />
                <Bars array={dataSet} />
                <Controls
                    handlePlay={handlePlay}
                    handleReset={handleReset}
                    speedChange={speedChangeHandler}
                />
            </div>
        </div>
    );
};

export default Sorting;
