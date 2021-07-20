import React from "react";
import styles from "./Controls.module.scss";
import PlayButton from "./PlayButton/PlayButton";
import Button from "./../../UI/Button/Button";

const Controls = ({ setDataSet, newSet, dataAmount, setSortingOn, sortingOn }) => {
    const handleReset = () => {
        setDataSet(() => newSet(dataAmount));
    };

    return (
        <div className={styles["controls-container"]}>
            <div className={styles["controls"]}>
                <div className={styles["btns"]}>
                    <Button className={"controls-left"}>restart.</Button>
                    <Button className={"controls-left"} handleClick={handleReset}>
                        reset.
                    </Button>
                </div>
                <PlayButton setSortingOn={setSortingOn} sortingOn={sortingOn} />
                <div className={styles["btns"]}>
                    <div className={styles["btns-2"]}>
                        <Button className={"controls-right"}>{"<"}</Button>
                        <Button className={"controls-right"}>{">"}</Button>
                    </div>
                    <Button className={"controls-left"}>(speed)</Button>
                </div>
            </div>
        </div>
    );
};

export default Controls;
