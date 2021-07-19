import React, { useEffect, useState } from "react";
import CompletedNode from "./CompletedNode/CompletedNode";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./SetupProgress.module.scss";

const SetupProgress = ({ sortSelection, dataSelection }) => {
    const [chooseSort, setChooseSort] = useState(false);
    const [chooseData, setChooseData] = useState(false);

    useEffect(() => {
        if (sortSelection === null) setChooseSort(false);
        else setChooseSort(true);
    }, [sortSelection]);

    useEffect(() => {
        if (dataSelection === null) setChooseData(false);
        else setChooseData(true);
    }, [dataSelection]);

    return (
        <div className={styles["setupProgress-container"]}>
            <div className={styles["progress-titles"]}>
                <p>1) choose sort.</p>
                <p>{chooseData && chooseSort ? `ready.` : `(not ready.)`}</p>
                <p>2) choose data.</p>
            </div>

            <div className={styles["setupProgress"]}>
                <CompletedNode full={chooseSort} />
                <ProgressBar fillRight full={chooseSort} />
                <CompletedNode mid full={chooseSort && chooseData} />
                <ProgressBar fillLeft full={chooseData} />
                <CompletedNode full={chooseData} />
            </div>
        </div>
    );
};

export default SetupProgress;
