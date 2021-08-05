import React from "react";
import styles from "./Controls.module.scss";
import PlayButton from "./PlayButton/PlayButton";

const Controls = ({ handlePlay, handleReset }) => {
    return (
        <div className={styles["controls-container"]}>
            <div className={styles["controls"]}>
                <PlayButton handlePlay={handlePlay} handleReset={handleReset} />
            </div>
        </div>
    );
};

export default Controls;
