import React from "react";
import styles from "./Bar.module.scss";

const max = 100;

const Bar = ({ height, color, opacity }) => {
    height = Math.round((height / max) * 100) + "%";

    return (
        <div
            className={`data-bar ${styles.bar}`}
            style={{ height: height, background: color && color, opacity: opacity }}
        ></div>
    );
};

export default Bar;
