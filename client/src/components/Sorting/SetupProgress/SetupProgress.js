import React from "react";
import CompletedNode from "./CompletedNode/CompletedNode";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./SetupProgress.module.scss";

const SetupProgress = () => {
    return (
        <div className={styles["setupProgress-container"]}>
            <div className={styles["progress-titles"]}>
                <p>1) choose sort.</p>
                <p>(not ready.)</p>
                <p>2) choose data.</p>
            </div>
            <div className={styles["setupProgress"]}>
                <CompletedNode />
                <ProgressBar fillRight />
                <CompletedNode />
                <ProgressBar fillLeft />
                <CompletedNode />
            </div>
        </div>
    );
};

export default SetupProgress;
