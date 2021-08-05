import React, { useContext } from "react";
import SortContext from "../../../../store/sort-context";
import styles from "./PlayButton.module.scss";
import { FaPlay } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const PlayButton = ({ handlePlay, handleReset }) => {
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
        <button
            className={styles.button}
            onClick={handleToggle}
            disabled={!sortCtx.sortSelection || !sortCtx.dataSelection}
        >
            {!sortCtx.sortingOn && <FaPlay className={styles.button__play} />}
            {sortCtx.sortingOn && <BiReset className={styles.button__reset} />}
        </button>
    );
};

export default PlayButton;
