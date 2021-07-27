import React, { useContext } from "react";
import SortContext from "../../../store/sort-context";
import CompletedNode from "./CompletedNode/CompletedNode";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./SetupProgress.module.scss";

const SetupProgress = () => {
    const sortCtx = useContext(SortContext);

    const isSortSelected = sortCtx.sortSelection !== null;
    const isDataSelected = sortCtx.dataSelection !== null;
    const bothSelected = isSortSelected && isDataSelected;

    return (
        <div className={styles["setupProgress-container"]}>
            <div className={styles["progress-titles"]}>
                <p>1) choose sort.</p>
                <p>{bothSelected ? `ready.` : `(not ready.)`}</p>
                <p>2) choose data.</p>
            </div>

            <div className={styles["setupProgress"]}>
                <CompletedNode full={isSortSelected} />
                <ProgressBar fillRight full={isSortSelected} />
                <CompletedNode mid full={bothSelected} />
                <ProgressBar fillLeft full={isDataSelected} />
                <CompletedNode full={isDataSelected} />
            </div>
        </div>
    );
};

export default SetupProgress;
