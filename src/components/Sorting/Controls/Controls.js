import React from "react";
import styles from "./Controls.module.scss";
import PlayButton from "./PlayButton/PlayButton";
import Button from "./../../UI/Button/Button";

const Controls = ({
    setDataSet,
    newSet,
    dataAmount,
    setSortingOn,
    sortingOn,
    speed,
    setSpeed,
    handlePlay,
    handleStop,
}) => {
    const handleReset = () => {
        setDataSet(() => newSet(dataAmount));
        if (sortingOn) {
            setSortingOn(false);
        }
    };

    const handleRangeChange = (e) => {
        setSpeed(e.target.value);
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
                    handleStop={handleStop}
                />
                <div className={styles["btns"]}>
                    {/* <div className={styles["btns-2"]}>
                        <Button className={"controls-right"}>{"<"}</Button>
                        <Button className={"controls-right"}>{">"}</Button>
                    </div> */}
                    <input
                        disabled={sortingOn}
                        className={styles.range}
                        onChange={handleRangeChange}
                        type="range"
                        min="1"
                        max="301"
                        step="25"
                        value={speed}
                    />
                </div>
            </div>
        </div>
    );
};

export default Controls;
