import React from "react";
import Bars from "./Bars/Bars";
import styles from "./Sorting.module.scss";

const Sorting = () => {
    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}>
                <Bars />
            </div>
        </div>
    );
};

export default Sorting;
