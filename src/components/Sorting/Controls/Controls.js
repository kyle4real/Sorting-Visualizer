import React, { useContext } from "react";
import SortContext from "../../../store/sort-context";

import classes from "./Controls.module.scss";

import PlayButton from "./PlayButton/PlayButton";

const Controls = ({ handlePlay, handleReset }) => {
    const sortCtx = useContext(SortContext);

    const isDisabled = !sortCtx.sortSelection || !sortCtx.dataSelection;

    const rangeNum = 50;
    const tooltipPosition = `calc(${rangeNum}px - 10px)`;

    return (
        <div className={classes.controls__container}>
            <div className={classes.controls}>
                <PlayButton
                    handlePlay={handlePlay}
                    handleReset={handleReset}
                    disabled={isDisabled}
                />
                <div className={classes.controls__range}>
                    <div className={classes.tooltip}>
                        <div style={{ left: tooltipPosition }} className={classes.tooltip__num}>
                            50
                        </div>
                    </div>
                    <input
                        className={classes.range}
                        type="range"
                        disabled={isDisabled}
                        min={1}
                        max={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default Controls;
