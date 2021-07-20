import React from "react";
import styles from "./Controls.module.scss";
import PlayButton from "./PlayButton/PlayButton";
import StopButton from "./StopButton/StopButton";

const Controls = () => {
    return (
        <div className={styles["controls-container"]}>
            <div className={styles["controls"]}>
                <PlayButton isPlaying={false} />
                <StopButton />
            </div>
        </div>
    );
};

export default Controls;
