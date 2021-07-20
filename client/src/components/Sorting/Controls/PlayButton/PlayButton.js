import React, { useState } from "react";
import styles from "./PlayButton.module.scss";
import { FaPlay, FaPause } from "react-icons/fa";

const PlayButton = ({ setSortingOn, sortingOn }) => {
    const handleToggle = () => {
        setSortingOn((p) => !p);
    };

    return (
        <button className={styles["play-button"]} onClick={handleToggle}>
            {!sortingOn && <FaPlay className={styles["play-button__play"]} />}
            {sortingOn && <FaPause className={styles["play-button__pause"]} />}
        </button>
    );
};

export default PlayButton;
