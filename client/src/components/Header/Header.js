import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={`primary ${styles["header-container"]}`}>
            <div className={`container ${styles["header"]}`}></div>
        </div>
    );
};

export default Header;
