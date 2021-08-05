import React from "react";

import classes from "./Header.module.scss";

const Header = () => {
    return (
        <div className={classes.header__container}>
            <div className={`container ${classes.header}`}>
                <h1>SortApp.</h1>
            </div>
        </div>
    );
};

export default Header;
