import React, { useState } from "react";
import styles from "./PlayButton.module.scss";
import { FaPlay, FaPause } from "react-icons/fa";

const PlayButton = () => {
    const [playing, setPlaying] = useState(false);

    const handleToggle = () => {
        setPlaying((p) => !p);
    };

    return (
        <button className={styles["play-button"]} onClick={handleToggle}>
            {!playing && <FaPlay className={styles["play-button__play"]} />}
            {playing && <FaPause className={styles["play-button__pause"]} />}
        </button>
    );
};

export default PlayButton;
