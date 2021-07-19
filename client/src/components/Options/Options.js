import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Options.module.scss";

const Options = ({ setSortSelection, sortSelection }) => {
    const handleClick = (e) => {
        const selection = e.target.textContent;
        setSortSelection((p) => {
            if (p === selection) return null;
            return selection;
        });
    };
    return (
        <div className={styles["options-container"]}>
            <div className={`container ${styles["options"]}`}>
                <Button handleClick={handleClick}>Bubble Sort</Button>
                <Button handleClick={handleClick}>Selection Sort</Button>
                <Button handleClick={handleClick}>Insertion Sort</Button>
            </div>
        </div>
    );
};

export default Options;
