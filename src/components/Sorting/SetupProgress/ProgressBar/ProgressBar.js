import React from "react";

import classes from "./ProgressBar.module.scss";

const ProgressBar = ({ fillRight, fillLeft, full }) => {
    return (
        <>
            {fillRight && (
                <div className={classes.progress__bar__right}>
                    <div
                        className={`${classes.progress__bar__right__fill} ${full && classes.fill}`}
                    ></div>
                </div>
            )}
            {fillLeft && (
                <div className={classes.progress__bar__left}>
                    <div
                        className={`${classes.progress__bar__left__fill} ${!full && classes.fill}`}
                    ></div>
                </div>
            )}
        </>
    );
};

export default ProgressBar;
