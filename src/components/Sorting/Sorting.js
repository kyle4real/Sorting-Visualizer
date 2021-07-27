import React, { useEffect, useState, useContext } from "react";
import Bars from "./Bars/Bars";
import Controls from "./Controls/Controls";
import SetupProgress from "./SetupProgress/SetupProgress";
import styles from "./Sorting.module.scss";

import { randomDataSet } from "../../helpers/generateDataSet";

// Algorithm Imports
// import bubbleSort from "../../algorithms/bubbleSort";
// import selectionSort from "../../algorithms/selectionSort";
// import insertionSort from "../../algorithms/insertionSort";
// end Algorithm Imports

// Animations import
// import { bubbleSortAnimate, refreshAnimate } from "../../animations/animations";
import SortContext from "../../store/sort-context";

import BubbleSort from "./../../algs/BubbleSort";

const Sorting = ({ sortingOn, setSortingOn }) => {
    const sortCtx = useContext(SortContext);

    const [speed, setSpeed] = useState(150);
    const [dataSet, setDataSet] = useState(() => randomDataSet());
    const [animations, setAnimations] = useState(null);

    useEffect(() => {
        setDataSet(() => randomDataSet(sortCtx.dataAmount));
    }, [sortCtx.dataAmount]);

    useEffect(() => {
        if (sortCtx.dataAmount && sortCtx.sortSelection && sortCtx.dataSelection) {
            const animation = BubbleSort(dataSet);
            setAnimations(animation);
        }
    }, [sortCtx.dataAmount, sortCtx.sortSelection, sortCtx.dataSelection, dataSet]);

    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}>
                <SetupProgress />
                <Bars nums={dataSet} animations={animations} />
                <Controls
                    setDataSet={setDataSet}
                    newSet={randomDataSet}
                    dataAmount={sortCtx.dataAmount}
                    sortingOn={sortingOn}
                    setSortingOn={setSortingOn}
                    speed={speed}
                    setSpeed={setSpeed}
                    // handlePlay={handlePlay}
                    // handleStop={handleStop}
                />
            </div>
        </div>
    );
};

export default Sorting;
