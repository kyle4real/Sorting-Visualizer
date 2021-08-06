import React, { useContext } from "react";
import SortContext from "../../../store/sort-context";

import classes from "./Controls.module.scss";

import PlayButton from "./PlayButton/PlayButton";

const Controls = ({ handlePlay, handleReset }) => {
    const sortCtx = useContext(SortContext);

    const isDisabled = !sortCtx.sortSelection || !sortCtx.dataSelection;

    return (
        <div className={classes.controls__container}>
            <div className={classes.controls}>
                <PlayButton
                    handlePlay={handlePlay}
                    handleReset={handleReset}
                    disabled={isDisabled}
                />
                <input className={classes.controls__range} type="range" disabled={isDisabled} />
            </div>
        </div>
    );
};

export default Controls;
