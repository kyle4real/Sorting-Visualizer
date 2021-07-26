import React, { useState } from "react";
import styles from "./PlayButton.module.scss";
import { FaPlay, FaStop } from "react-icons/fa";

const PlayButton = ({ setSortingOn, sortingOn, handlePlay, handleStop }) => {
    const handleToggle = () => {
        setSortingOn((p) => !p);
        if (!sortingOn) {
            handlePlay();
        } else {
            handleStop();
        }
    };

    return (
        <button className={styles["play-button"]} onClick={handleToggle}>
            {!sortingOn && <FaPlay className={styles["play-button__play"]} />}
            {sortingOn && <FaStop className={styles["play-button__pause"]} />}
        </button>
    );
};

export default PlayButton;
