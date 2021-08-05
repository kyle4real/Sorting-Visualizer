import React, { useContext, useEffect, useState } from "react";
import SortContext from "../../../store/sort-context";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

const Bars = ({ array }) => {
    const sortCtx = useContext(SortContext);

    return (
        <React.Fragment>
            <div className={styles["bars-container"]}>
                <div
                    className={styles["bars"]}
                    style={{ gridTemplateColumns: `repeat(${sortCtx.dataAmount}, 1fr)` }}
                >
                    {array.map((num, i) => (
                        <Bar
                            height={num}
                            key={i}
                            opacity={sortCtx.sortSelection && sortCtx.dataSelection ? 1 : 0}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Bars;
