import React from "react";
import styles from "./Sorting.module.scss";

const Sorting = () => {
    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}></div>
        </div>
    );
};

export default Sorting;
