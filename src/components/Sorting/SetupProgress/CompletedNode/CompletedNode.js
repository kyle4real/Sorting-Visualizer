import React from "react";

import classes from "./CompletedNode.module.scss";

const CompletedNode = ({ full, mid }) => {
    return (
        <>
            <div
                className={`${classes.completed__node} ${mid && classes.mid} ${
                    full && classes.full
                }`}
            ></div>
        </>
    );
};

export default CompletedNode;
