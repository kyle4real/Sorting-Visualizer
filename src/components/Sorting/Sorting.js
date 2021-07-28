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

    const [animation, setAnimation] = useState([]);
    const [animationStep, setAnimationStep] = useState(-1);

    const [origArray, setOrigArray] = useState([]);
    const [array, setArray] = useState([]);
    const [groupA, setGroupA] = useState([]);
    const [groupB, setGroupB] = useState([]);
    const [groupC, setGroupC] = useState([]);
    const [groupD, setGroupD] = useState([]);
    const [sortedIndicies, setSortedIndicies] = useState([]);

    const [timeoutIds, setTimeoutIds] = useState([]);
    const [speed, setSpeed] = useState(6);

    useEffect(() => {
        reset(dataSet);
        setAnimation(animations);
    }, [dataSet, animations]);

    // useEffect(() => {
    //     clearTimeouts();
    //     setAnimation(animations);
    // }, [animations]);

    //  Actions

    const reset = (array) => {
        setArray(array);
        setAnimation([]);
        setAnimationStep(-1);
        setGroupA([]);
        setGroupB([]);
        setGroupC([]);
        setGroupD([]);
        setSortedIndicies([]);
        setOrigArray([...array]);
    };

    const clearTimeouts = () => {
        timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
        setTimeoutIds([]);
    };

    const changeVisualState = (visualState) => {
        setArray(visualState.array);
        setGroupA(visualState.groupA);
        setGroupB(visualState.groupB);
        setGroupC(visualState.groupC);
        setGroupD(visualState.groupD);
        setSortedIndicies(visualState.sortedIndicies);
    };

    const run = (animation) => {
        const timeoutIds = [];
        const timer = 500 / speed;

        // timeout for each animation item
        animation.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    setAnimationStep((p) => p + 1);
                    changeVisualState(item);
                },
                i * timer,
                item
            );

            timeoutIds.push(timeoutId);
        });
        console.log("test");
        // clear timeouts upon completion
        let timeoutId = setTimeout(() => {
            clearTimeouts();
            onComplete();
        }, animation.length * timer);
        timeoutIds.push(timeoutId);

        setTimeoutIds(timeoutIds);
    };

    const pause = () => {
        clearTimeouts();
    };

    const continueAnimation = () => {
        const newAnimation = animation.slice(animationStep);
        run(newAnimation);
    };

    const stepForward = () => {
        if (animationStep < animation.length - 1) {
            const item = animation[animationStep + 1];
            setAnimationStep((p) => p + 1);
            changeVisualState(item);
        }
    };
    const stepBackward = () => {
        if (animationStep > 0) {
            const item = animation[animationStep - 1];
            setAnimationStep((p) => p - 1);
            changeVisualState(item);
        }
    };

    const adjustSpeed = (speed) => {
        const playing = timeoutIds.length > 0;
        pause();
        setSpeed(speed);
        if (playing) continueAnimation();
    };

    const onComplete = () => {
        console.log("completed");
    };

    console.log(animation);

    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}>
                <SetupProgress />
                <Bars
                    array={array}
                    groupA={groupA}
                    groupB={groupB}
                    groupC={groupC}
                    groupD={groupD}
                    sortedIndicies={sortedIndicies}
                />
                <Controls
                    setDataSet={setDataSet}
                    newSet={randomDataSet}
                    dataAmount={sortCtx.dataAmount}
                    sortingOn={sortingOn}
                    setSortingOn={setSortingOn}
                    handleStepForward={stepForward}
                    handleStepBackward={stepBackward}
                    speed={speed}
                    adjustSpeed={adjustSpeed}
                    handlePlay={
                        animationStep === -1 ? run.bind(null, animation) : continueAnimation
                    }
                    handlePause={pause}
                />
            </div>
        </div>
    );
};

export default Sorting;
