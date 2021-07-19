import React, { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(!animate);
    };

    return (
        <>
            <div className={styles["progress-bar"]}>
                <div className={`${styles["progress-bar__fill"]} ${animate && styles.grow}`}></div>
                <button onClick={handleClick}>c</button>
            </div>
        </>
    );
};

export default ProgressBar;
