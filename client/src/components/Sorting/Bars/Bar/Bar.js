import React from "react";
import styles from "./Bar.module.scss";

const max = 100;

const Bar = ({ height, opacity, stateA, stateB, stateC, stateD, sorted }) => {
    height = Math.round((height / max) * 100) + "%";

    let classNames = `data-bar ${styles.bar}`;
    if (sorted) classNames += ` ${styles.bar__sorted}`;
    if (stateD) classNames += ` ${styles.bar__stateD}`;
    else if (stateC) classNames += ` ${styles.bar__stateC}`;
    else if (stateB) classNames += ` ${styles.bar__stateB}`;
    else if (stateA) classNames += ` ${styles.bar__stateA}`;

    return <div className={classNames} style={{ height: height, opacity: opacity }}></div>;
};

export default Bar;
