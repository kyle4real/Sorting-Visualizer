import React, { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ fillRight, fillLeft }) => {
    const [fill, setFill] = useState(fillRight ? false : true);

    const handleClick = () => {
        setFill((p) => !p);
    };

    return (
        <>
            {fillRight && (
                <div className={styles["progress-bar-right"]}>
                    <div
                        className={`${styles["progress-bar-right__fill"]} ${fill && styles.fill}`}
                    ></div>
                    <button onClick={handleClick}>c</button>
                </div>
            )}
            {fillLeft && (
                <div className={styles["progress-bar-left"]}>
                    <div
                        className={`${styles["progress-bar-left__fill"]} ${fill && styles.fill}`}
                    ></div>
                    <button onClick={handleClick}>c</button>
                </div>
            )}
        </>
    );
};

export default ProgressBar;
