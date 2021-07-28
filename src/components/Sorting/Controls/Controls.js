import React, { useState } from "react";
import styles from "./Controls.module.scss";
import PlayButton from "./PlayButton/PlayButton";
import Button from "./../../UI/Button/Button";

const Controls = ({
    setDataSet,
    newSet,
    dataAmount,
    setSortingOn,
    sortingOn,
    handleStepForward,
    handleStepBackward,
    handlePlay,
    handlePause,
    speed,
    adjustSpeed,
}) => {
    const handleReset = () => {
        setDataSet(() => newSet(dataAmount));
        if (sortingOn) {
            setSortingOn(false);
        }
    };

    const handleRangeChange = (e) => {
        adjustSpeed(e.target.value);
    };

    return (
        <div className={styles["controls-container"]}>
            <div className={styles["controls"]}>
                <div className={styles["btns"]}>
                    {/* <Button className={"controls-left"}>restart.</Button> */}
                    <Button
                        className={"controls-left"}
                        handleClick={handleReset}
                        disabled={sortingOn}
                    >
                        reset.
                    </Button>
                </div>
                <PlayButton
                    setSortingOn={setSortingOn}
                    sortingOn={sortingOn}
                    handlePlay={handlePlay}
                    handlePause={handlePause}
                />
                <div className={styles["btns"]}>
                    <div className={styles["btns-2"]}>
                        <Button className={"controls-right"} handleClick={handleStepBackward}>
                            {"<"}
                        </Button>
                        <Button className={"controls-right"} handleClick={handleStepForward}>
                            {">"}
                        </Button>
                    </div>
                    <input
                        // disabled={sortingOn}
                        className={styles.range}
                        onChange={handleRangeChange}
                        type="range"
                        min="1"
                        max="11"
                        step="1"
                        value={speed}
                    />
                </div>
            </div>
        </div>
    );
};

export default Controls;
