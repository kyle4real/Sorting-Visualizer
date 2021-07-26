import React from "react";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

const Bars = ({ dataSet, dataAmount, sortSelection, dataSelection }) => {
    return (
        <div className={styles["bars-container"]}>
            <div
                className={styles["bars"]}
                style={{ gridTemplateColumns: `repeat(${dataAmount.length}, 1fr)` }}
            >
                {dataSet.map(({ id, height, color }) => (
                    <Bar
                        key={id}
                        height={height}
                        color={color}
                        opacity={dataSelection && sortSelection ? 1 : 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default Bars;
