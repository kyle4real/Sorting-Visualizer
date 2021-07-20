import React from "react";
import Bars from "./Bars/Bars";
import Controls from "./Controls/Controls";
import SetupProgress from "./SetupProgress/SetupProgress";
import styles from "./Sorting.module.scss";

const Sorting = ({ sortSelection, dataSelection, dataAmount }) => {
    return (
        <div className={styles["sorting-container"]}>
            <div className={`container ${styles["sorting"]}`}>
                <SetupProgress sortSelection={sortSelection} dataSelection={dataSelection} />
                <Bars />
                <Controls />
            </div>
        </div>
    );
};

export default Sorting;
