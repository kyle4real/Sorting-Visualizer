import React, { useEffect, useState, useContext } from "react";
import Bars from "./Bars/Bars";
import Controls from "./Controls/Controls";
import SetupProgress from "./SetupProgress/SetupProgress";
import styles from "./Sorting.module.scss";

import { randomDataSet } from "../../helpers/generateDataSet";

import SortContext from "../../store/sort-context";

import bubbleSort from "./../../algorithms/bubbleSort";
import { bubbleSortAnimate, refreshAnimate } from "../../animations/animations";

const Sorting = ({ sortingOn, setSortingOn }) => {
    const sortCtx = useContext(SortContext);
    const [dataSet, setDataSet] = useState(() => randomDataSet());
    const [animations, setAnimations] = useState(null);

    useEffect(() => {
        setDataSet(() => randomDataSet(sortCtx.dataAmount));
    }, [sortCtx.dataAmount]);

    useEffect(() => {
        if (sortCtx.dataAmount && sortCtx.sortSelection && sortCtx.dataSelection) {
            const animation = bubbleSort(dataSet, dataSet.length);
            console.log(animation);
            setAnimations(animation);
            console.log("animations created");
        }
    }, [sortCtx.dataAmount, sortCtx.sortSelection, sortCtx.dataSelection, dataSet]);

    const handlePlay = () => {
        console.log(animations);
        bubbleSortAnimate(animations, 2, null, sortCtx.dataAmount);
    };

    const handleReset = () => {
        refreshAnimate();
        const dataSetCopy = [...dataSet];
        setDataSet(dataSetCopy);
    };

    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}>
                <SetupProgress />
                <Bars array={dataSet} />
                <Controls
                    handlePlay={handlePlay}
                    handlePause={handleReset}
                    sortingOn={sortingOn}
                    setSortingOn={setSortingOn}
                />
            </div>
        </div>
    );
};

export default Sorting;
