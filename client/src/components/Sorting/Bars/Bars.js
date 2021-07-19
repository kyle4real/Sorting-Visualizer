import React from "react";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

const data = [
    { id: 1, height: 50 },
    { id: 1, height: 24 },
    { id: 1, height: 87 },
    { id: 1, height: 92 },
    { id: 1, height: 37 },
    { id: 1, height: 3 },
    { id: 1, height: 13 },
    { id: 1, height: 69 },
];

const Bars = () => {
    return (
        <div className={styles["bars-container"]}>
            <div
                className={styles["bars"]}
                style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
            >
                {data.map((dataPoint) => (
                    <Bar key={dataPoint.id} />
                ))}
            </div>
        </div>
    );
};

export default Bars;
