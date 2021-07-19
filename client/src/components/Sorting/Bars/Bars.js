import React from "react";
import Bar from "./Bar/Bar";
import styles from "./Bars.module.scss";

const data = [
    { id: 1, height: 50 },
    { id: 2, height: 24 },
    { id: 3, height: 87 },
    { id: 4, height: 92 },
    { id: 5, height: 37 },
    { id: 6, height: 3 },
    { id: 7, height: 13 },
    { id: 8, height: 69 },
];

const Bars = () => {
    return (
        <div className={styles["bars-container"]}>
            <div
                className={styles["bars"]}
                style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
            >
                {data.map(({ id, height }) => (
                    <Bar key={id} height={height} />
                ))}
            </div>
        </div>
    );
};

export default Bars;
