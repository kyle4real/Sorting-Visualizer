import React from "react";
import Bars from "./Bars/Bars";
import SetupProgress from "./SetupProgress/SetupProgress";
import styles from "./Sorting.module.scss";

const Sorting = ({ sortSelection }) => {
    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}>
                <SetupProgress sortSelection={sortSelection} />
                <Bars />
            </div>
        </div>
    );
};

export default Sorting;
