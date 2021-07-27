import React, { useContext } from "react";
import SortContext from "../../../store/sort-context";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

const Bars = ({ dataSet }) => {
    const sortCtx = useContext(SortContext);

    return (
        <div className={styles["bars-container"]}>
            <div
                className={styles["bars"]}
                style={{ gridTemplateColumns: `repeat(${sortCtx.dataAmount.length}, 1fr)` }}
            >
                {dataSet.map(({ id, height, color }) => (
                    <Bar
                        key={id}
                        height={height}
                        color={color}
                        opacity={sortCtx.dataSelection && sortCtx.sortSelection ? 1 : 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bars;
