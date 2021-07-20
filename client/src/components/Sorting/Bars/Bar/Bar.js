import React from "react";
import styles from "./Bar.module.scss";

const max = 100;

const Bar = ({ height, color }) => {
    height = Math.round((height / max) * 100) + "%";

    return (
        <div
            className={`data-bar ${styles.bar}`}
            style={{ height: height, background: color && color }}
        ></div>
    );
};

export default Bar;
