import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Options.module.css";

const Options = () => {
    return (
        <div className={`secondary ${styles["options-container"]}`}>
            <div className={`container ${styles["options"]}`}>
                <Button>Bubble Sort</Button>
            </div>
        </div>
    );
};

export default Options;
