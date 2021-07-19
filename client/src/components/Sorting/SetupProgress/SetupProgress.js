import React from "react";
import CompletedNode from "./CompletedNode/CompletedNode";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./SetupProgress.module.scss";

const SetupProgress = () => {
    return (
        <div className={styles["setupProgress-container"]}>
            <div className={styles["setupProgress"]}>
                <CompletedNode />
                <ProgressBar />
                <CompletedNode />
                <ProgressBar />
                <CompletedNode />
            </div>
        </div>
    );
};

export default SetupProgress;
