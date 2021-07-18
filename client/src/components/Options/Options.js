import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Options.module.scss";

const Options = () => {
    return (
        <div className={styles["options-container"]}>
            <div className={`container ${styles["options"]}`}>
                <Button>Bubble Sort</Button>
            </div>
        </div>
    );
};

export default Options;
