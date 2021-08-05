import React from "react";
import styles from "./Controls.module.scss";
import PlayButton from "./PlayButton/PlayButton";

const Controls = ({ handlePlay, handleReset, sortingOn, setSortingOn }) => {
    return (
        <div className={styles["controls-container"]}>
            <div className={styles["controls"]}>
                <PlayButton
                    handlePlay={handlePlay}
                    handleReset={handleReset}
                    sortingOn={sortingOn}
                    setSortingOn={setSortingOn}
                />
            </div>
        </div>
    );
};

export default Controls;
