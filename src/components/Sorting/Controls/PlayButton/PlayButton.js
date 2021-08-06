import React, { useContext } from "react";
import SortContext from "../../../../store/sort-context";

import classes from "./PlayButton.module.scss";

import { FaPlay } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const PlayButton = ({ handlePlay, handleReset, disabled }) => {
    const sortCtx = useContext(SortContext);

    const handleToggle = () => {
        if (!sortCtx.sortingOn) {
            handlePlay();
        } else {
            handleReset();
        }
        sortCtx.changeSortingOn();
    };

    return (
        <button className={classes.button} onClick={handleToggle} disabled={disabled}>
            {!sortCtx.sortingOn && <FaPlay className={classes.button__play} />}
            {sortCtx.sortingOn && <BiReset className={classes.button__reset} />}
        </button>
    );
};

export default PlayButton;
