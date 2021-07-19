import React, { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = () => {
    const [on, setOn] = useState(false);
    const [direction, setDirection] = useState(false);
    const [width, setWidth] = useState(0);
    const intervalRef = useRef();

    const handleClick = () => {
        setOn((p) => !p);
        setDirection((p) => !p);
    };

    useEffect(() => {
        // prevents start on render
        if (!on) return;
        setOn((p) => !p);
        // prevents clearing an undefined interval
        if (intervalRef.current !== undefined) clearInterval();
        // start interval
        var i = width;
        intervalRef.current = setInterval(() => {
            if (direction) {
                if (i >= 100) {
                    setOn((p) => !p);
                    setDirection((p) => !p);
                    clearInterval(intervalRef.current);
                    return;
                } else {
                    i++;
                    setWidth((p) => (p += 1));
                }
            } else {
                if (i <= 0) {
                    setOn((p) => !p);
                    setDirection((p) => !p);
                    clearInterval(intervalRef.current);
                    return;
                } else {
                    i--;
                    setWidth((p) => (p -= 1));
                }
            }
        }, 10);
    }, [on]);

    return (
        <>
            <div className={styles["progress-bar"]}>
                <div className={styles["progress-bar__fill"]} style={{ width: `${width}%` }}></div>
                <button onClick={handleClick}>c</button>
            </div>
        </>
    );
};

export default ProgressBar;
