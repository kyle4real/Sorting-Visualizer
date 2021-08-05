import React, { useContext } from "react";
import SortContext from "../../../../store/sort-context";
import styles from "./PlayButton.module.scss";
import { FaPlay } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const PlayButton = ({ setSortingOn, sortingOn, handlePlay, handleReset }) => {
    const sortCtx = useContext(SortContext);

    const handleToggle = () => {
        setSortingOn((p) => !p);
        if (!sortingOn) {
            handlePlay();
        } else {
            handleReset();
        }
    };

    return (
        <button
            className={styles.button}
            onClick={handleToggle}
            disabled={!sortCtx.sortSelection || !sortCtx.dataSelection}
        >
            {!sortingOn && <FaPlay className={styles.button__play} />}
            {sortingOn && <BiReset className={styles.button__reset} />}
        </button>
    );
};

export default PlayButton;
