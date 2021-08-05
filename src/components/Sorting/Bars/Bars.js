import React, { useContext } from "react";
import SortContext from "../../../store/sort-context";
import Bar from "./Bar/Bar";
import classes from "./Bars.module.scss";

const Bars = ({ array }) => {
    const sortCtx = useContext(SortContext);

    return (
        <div className={classes.bars__container}>
            <div className={classes.bars}>
                {array.map((num, i) => (
                    <Bar
                        height={num}
                        key={i}
                        opacity={sortCtx.sortSelection && sortCtx.dataSelection ? 1 : 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bars;
