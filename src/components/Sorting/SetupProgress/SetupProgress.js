import React, { useContext } from "react";
import SortContext from "../../../store/sort-context";
import CompletedNode from "./CompletedNode/CompletedNode";
import ProgressBar from "./ProgressBar/ProgressBar";

import classes from "./SetupProgress.module.scss";

const SetupProgress = () => {
    const sortCtx = useContext(SortContext);

    const isSortSelected = sortCtx.sortSelection !== null;
    const isDataSelected = sortCtx.dataSelection !== null;
    const bothSelected = isSortSelected && isDataSelected;

    return (
        <div className={classes.progress}>
            <div className={classes.progress__titles}>
                <p>1) choose sort.</p>
                <p>{bothSelected ? `ready.` : `(not ready.)`}</p>
                <p>2) choose data.</p>
            </div>

            <div className={classes.progress__setup}>
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
