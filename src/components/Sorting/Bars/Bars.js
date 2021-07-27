import React, { useContext, useEffect, useState } from "react";
import SortContext from "../../../store/sort-context";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

const Bars = ({ nums, animations }) => {
    const sortCtx = useContext(SortContext);

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
    const [speed, setSpeed] = useState(5);

    useEffect(() => {
        reset(nums);
    }, [nums]);

    useEffect(() => {
        clearTimeouts();
        setAnimation(animations);
    }, [animations]);

    console.log(animation);

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

    const run = () => {
        const timeoutIds = [];
        const timer = 250 / speed;

        // timeout for each animation item
        animation.forEach((item, i) => {
            let timeoutId = setTimeout(
                (item) => {
                    setAnimationStep((p) => p + 1);
                    // POSSIBLE ERROR
                    changeVisualState(item);
                },
                i * timer,
                item
            );

            timeoutIds.push(timeoutId);
        });

        // clear timeouts upon completion
        let timeoutId = setTimeout(clearTimeouts(), animation.length * timer);
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

    return (
        <React.Fragment>
            <div className={styles["bars-container"]}>
                <div
                    className={styles["bars"]}
                    style={{ gridTemplateColumns: `repeat(${sortCtx.dataAmount.length}, 1fr)` }}
                >
                    {array.map((num, i) => {
                        let stateA = groupA.includes(i);
                        let stateB = groupB.includes(i);
                        let stateC = groupC.includes(i);
                        let stateD = groupD.includes(i);
                        let sorted = sortedIndicies.includes(i);
                        return (
                            <Bar
                                key={`${i}_${num}`}
                                height={num}
                                opacity={sortCtx.dataSelection && sortCtx.sortSelection ? 1 : 0}
                                stateA={stateA}
                                stateB={stateB}
                                stateC={stateC}
                                stateD={stateD}
                                sorted={sorted}
                            />
                        );
                    })}
                </div>
            </div>
            <button onClick={run}>play</button>
        </React.Fragment>
    );
};

export default Bars;
