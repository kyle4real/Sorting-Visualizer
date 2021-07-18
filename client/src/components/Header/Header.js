import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={`primary ${styles["header-container"]}`}>
            <div className={`container ${styles["header"]}`}>
                <h1 className="text-primary">SortApp.</h1>
            </div>
        </div>
    );
};

export default Header;
