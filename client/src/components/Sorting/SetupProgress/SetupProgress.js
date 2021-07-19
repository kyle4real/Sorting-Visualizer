import React, { useEffect, useState } from "react";
import CompletedNode from "./CompletedNode/CompletedNode";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./SetupProgress.module.scss";

const SetupProgress = ({ sortSelection }) => {
    const [chooseSort, setChooseSort] = useState(false);
    const [chooseData, setChooseData] = useState(false);

    useEffect(() => {
        if (sortSelection === null) setChooseSort(false);
        else setChooseSort(true);
    }, [sortSelection]);

    const handleChooseSort = () => {
        setChooseSort((p) => !p);
    };

    const handleChooseData = () => {
        setChooseData((p) => !p);
    };

    return (
        <div className={styles["setupProgress-container"]}>
            <div className={styles["progress-titles"]}>
                <p>
                    1) choose sort.<button onClick={handleChooseSort}>c</button>
                </p>
                <p>{chooseData && chooseSort ? `ready.` : `(not ready.)`}</p>
                <p>
                    2) choose data.<button onClick={handleChooseData}>c</button>
                </p>
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
