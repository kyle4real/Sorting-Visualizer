import React, { useState } from "react";
import styles from "./Controls.module.scss";
import PlayButton from "./PlayButton/PlayButton";
import Button from "./../../UI/Button/Button";

const Controls = ({ handlePlay, handlePause, sortingOn, setSortingOn }) => {
    return (
        <div className={styles["controls-container"]}>
            <div className={styles["controls"]}>
                <PlayButton
                    handlePlay={handlePlay}
                    handlePause={handlePause}
                    sortingOn={sortingOn}
                    setSortingOn={setSortingOn}
                />
            </div>
        </div>
    );
};

export default Controls;
