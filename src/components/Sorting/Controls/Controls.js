import React, { useState } from "react";

import classes from "./Controls.module.scss";

import PlayButton from "./PlayButton/PlayButton";

const Controls = ({ handlePlay, handleReset, speedChange, sortingOn, isDisabled }) => {
    const [range, setRange] = useState(0);
    const [tooltip, setToolTip] = useState(false);

    const tooltipPosition = `${range}%`;

    const handleRangeChange = (e) => {
        const val = e.target.value;
        setRange(val);
        speedChange(val);
    };

    const handleMouseDown = () => {
        setToolTip(true);
    };
    const handleMouseUp = () => {
        setToolTip(false);
    };

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
                        <div style={{ left: tooltipPosition }} className={classes.tooltip__thumb}>
                            {tooltip && (
                                <span className={classes.tooltip__thumb__num}>{range}</span>
                            )}
                        </div>
                    </div>
                    <input
                        className={classes.range}
                        type="range"
                        disabled={isDisabled || sortingOn}
                        min={0}
                        max={100}
                        onChange={(e) => handleRangeChange(e)}
                        value={range}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                    />
                </div>
            </div>
        </div>
    );
};

export default Controls;
