import React from "react";
import styles from "./Controls.module.scss";
import PlayButton from "./PlayButton/PlayButton";

const Controls = () => {
    return (
        <div className={styles["controls-container"]}>
            <div className={styles["controls"]}>
                <PlayButton isPlaying={false} />
            </div>
        </div>
    );
};

export default Controls;
