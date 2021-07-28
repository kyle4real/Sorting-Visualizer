import React, { useContext, useEffect, useState } from "react";
import SortContext from "../../../store/sort-context";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

const Bars = ({ array, groupA, groupB, groupC, groupD, sortedIndicies }) => {
    const sortCtx = useContext(SortContext);

    return (
        <React.Fragment>
            <div className={styles["bars-container"]}>
                <div
                    className={styles["bars"]}
                    style={{ gridTemplateColumns: `repeat(${sortCtx.dataAmount}, 1fr)` }}
                >
                    {array.map((num, i) => {
                        let stateA = groupA.includes(i);
                        let stateB = groupB.includes(i);
                        let stateC = groupC.includes(i);
                        let stateD = groupD.includes(i);
                        let sorted = sortedIndicies.includes(i);
                        return (
                            <Bar
                                key={`${i}_${num}`}
                                height={num}
                                opacity={sortCtx.dataSelection && sortCtx.sortSelection ? 1 : 0}
                                stateA={stateA}
                                stateB={stateB}
                                stateC={stateC}
                                stateD={stateD}
                                sorted={sorted}
                            />
                        );
                    })}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Bars;
