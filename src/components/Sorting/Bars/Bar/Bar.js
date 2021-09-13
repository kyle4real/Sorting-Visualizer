import React from "react";

import classes from "./Bar.module.scss";

const max = 100;

const Bar = ({ height, opacity, barsClassName }) => {
    height = Math.round((height / max) * 100) + "%";

    let classNames = `${classes.bar} ${barsClassName ? barsClassName : "data-bar"}`;

    return <div className={classNames} style={{ height: height, opacity: opacity }}></div>;
};

export default Bar;
