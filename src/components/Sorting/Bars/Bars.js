import React from "react";
import Bar from "./Bar/Bar";
import classes from "./Bars.module.scss";

const Bars = ({ array, barsOpacity, heightSet, barsClassName }) => {
    return (
        <div
            className={classes.bars__container}
            style={heightSet && { height: heightSet, padding: "24px" }}
        >
            <div className={classes.bars}>
                {array.map((num, i) => (
                    <Bar key={i} height={num} opacity={barsOpacity} barsClassName={barsClassName} />
                ))}
            </div>
        </div>
    );
};

export default Bars;
