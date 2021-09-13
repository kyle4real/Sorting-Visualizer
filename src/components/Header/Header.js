import React from "react";
import Switch from "../UI/Switch/Switch";

import classes from "./Header.module.scss";

const Header = ({ toggleCompareSort }) => {
    return (
        <div className={classes.header__container}>
            <div className={`container ${classes.header}`}>
                <h1>SortApp.</h1>
                <div className={classes.header__toggler}>
                    <Switch toggle={toggleCompareSort} />
                </div>
            </div>
        </div>
    );
};

export default Header;
