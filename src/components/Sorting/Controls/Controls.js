import React from "react";

import classes from "./Controls.module.scss";

import PlayButton from "./PlayButton/PlayButton";

const Controls = ({ handlePlay, handleReset }) => {
    return (
        <div className={classes.controls__container}>
            <div className={classes.controls}>
                <PlayButton handlePlay={handlePlay} handleReset={handleReset} />
                <input className={classes.controls__range} type="range" />
            </div>
        </div>
    );
};

export default Controls;
