import React from "react";
import styles from "./Bar.module.scss";

const max = 100;

const Bar = ({ height }) => {
    height = Math.round((height / max) * 100) + "%";

    return <div className={styles.bar} style={{ height: height }}></div>;
};

export default Bar;
