import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ fillRight, fillLeft, full }) => {
    return (
        <>
            {fillRight && (
                <div className={styles["progress-bar-right"]}>
                    <div
                        className={`${styles["progress-bar-right__fill"]} ${full && styles.fill}`}
                    ></div>
                </div>
            )}
            {fillLeft && (
                <div className={styles["progress-bar-left"]}>
                    <div
                        className={`${styles["progress-bar-left__fill"]} ${!full && styles.fill}`}
                    ></div>
                </div>
            )}
        </>
    );
};

export default ProgressBar;
