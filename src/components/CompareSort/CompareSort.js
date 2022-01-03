import React, { useCallback, useState } from "react";
import bubbleSort from "../../algorithms/bubbleSort";
import insertionSort from "../../algorithms/insertionSort";
import selectionSort from "../../algorithms/selectionSort";
import {
    bubbleSortAnimate,
    insertionSortAnimate,
    refreshAnimate,
    selectionSortAnimate,
} from "../../animations/animations";
import { nearlySortedDataSet, randomDataSet } from "../../helpers/generateDataSet";
import Bars from "../Sorting/Bars/Bars";
import Controls from "../Sorting/Controls/Controls";

import classes from "./CompareSort.module.scss";
import SortOptions from "./SortOptions/SortOptions";

const CompareSort = () => {
    const [compareList, setCompareList] = useState([]);
    const [speed, setSpeed] = useState(201);
    const [sortingOn, setSortingOn] = useState();

    const addToCompareListHandler = useCallback((options) => {
        const { sorttype, datatype, dataamount } = options;
        let dataset, animations;
        dataset =
            datatype === "Random" ? randomDataSet(dataamount) : nearlySortedDataSet(dataamount);
        animations =
            sorttype === "Bubble Sort"
                ? bubbleSort(dataset)
                : sorttype === "Selection Sort"
                ? selectionSort(dataset)
                : insertionSort(dataset);
        const newCompare = {
            sorttype,
            datatype,
            dataamount,
            dataset,
            animations,
            timerArr: null,
        };
        setCompareList((p) => [...p, { ...newCompare, barsClassName: `item-${p.length + 1}` }]);
    }, []);

    const onFinish = () => {
        setSortingOn(false);
    };

    const handlePlay = () => {
        setSortingOn(true);
        setCompareList((p) => {
            for (let i = 0; i < p.length; i++) {
                const { animations, dataamount, sorttype, barsClassName } = p[i];
                if (sorttype === "Bubble Sort") {
                    p[i].timerArr = bubbleSortAnimate(
                        animations,
                        speed,
                        onFinish,
                        dataamount,
                        barsClassName
                    );
                } else if (sorttype === "Selection Sort") {
                    p[i].timerArr = selectionSortAnimate(
                        animations,
                        speed,
                        onFinish,
                        dataamount,
                        barsClassName
                    );
                } else if (sorttype === "Insertion Sort") {
                    p[i].timerArr = insertionSortAnimate(
                        animations,
                        speed,
                        onFinish,
                        dataamount,
                        barsClassName
                    );
                }
            }
            return [...p];
        });
    };

    const speedChangeHandler = (num) => {
        const newSpeed = 201 - 2 * num;
        setSpeed(newSpeed);
    };

    const handleReset = () => {
        setCompareList((p) => {
            for (let i = 0; i < p.length; i++) {
                const { timerArr: timers, barsClassName, datatype, dataamount } = p[i];
                for (let j = 0; j < timers.length; j++) {
                    clearInterval(timers[j]);
                }
                refreshAnimate(barsClassName);
                let dataset =
                    datatype === "Random"
                        ? randomDataSet(dataamount)
                        : nearlySortedDataSet(dataamount);
                p[i].timerArr = null;
                p[i].dataset = dataset;
            }
            return [...p];
        });
        setSortingOn(false);
    };

    const removeCompareItem = (id) => {
        setCompareList((p) => {
            return p.filter(({ barsClassName }) => barsClassName !== id);
        });
    };

    return (
        <div className={classes.comparesort__container}>
            <div className={`container ${classes.comparesort}`}>
                {compareList.map(
                    ({ sorttype, datatype, dataamount, dataset, barsClassName }, index) => {
                        return (
                            <div className={classes.comparesort__item} key={index}>
                                <div className={classes.header}>
                                    <div>
                                        <span className={classes.label}>{sorttype}</span>
                                        <>&nbsp;-&nbsp;</>
                                        <span className={classes.label}>{datatype}</span>
                                        <>&nbsp;-&nbsp;</>
                                        <span className={classes.label}>{dataamount}</span>
                                    </div>
                                    <button
                                        className={classes.remove}
                                        onClick={() => removeCompareItem(barsClassName)}
                                        disabled={sortingOn}
                                    >
                                        X
                                    </button>
                                </div>

                                <Bars
                                    heightSet="calc(100% - 18px)"
                                    array={dataset}
                                    barsClassName={barsClassName}
                                />
                            </div>
                        );
                    }
                )}
                {compareList.length < 4 && (
                    <div className={classes.comparesort__item}>
                        <SortOptions addToCompareList={addToCompareListHandler} />
                    </div>
                )}
            </div>
            <div className={classes.controls__container}>
                <Controls
                    handlePlay={handlePlay}
                    handleReset={handleReset}
                    speedChange={speedChangeHandler}
                    isDisabled={compareList.length === 0}
                    sortingOn={sortingOn}
                />
            </div>
        </div>
    );
};

export default CompareSort;
