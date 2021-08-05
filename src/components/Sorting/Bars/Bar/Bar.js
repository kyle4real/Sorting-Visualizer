import React from "react";
import styles from "./Bar.module.scss";

const max = 100;

const Bar = ({ height, opacity }) => {
    height = Math.round((height / max) * 100) + "%";

    let classNames = `data-bar ${styles.bar}`;

    return <div className={classNames} style={{ height: height, opacity: opacity }}></div>;
};

export default Bar;
