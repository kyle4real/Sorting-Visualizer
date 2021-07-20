import React from "react";
import styles from "./StopButton.module.scss";
import { FaStop } from "react-icons/fa";

const StopButton = () => {
    return (
        <div className={styles["stop-button"]}>
            <FaStop className={styles["stop-button__stop"]} />
        </div>
    );
};

export default StopButton;
