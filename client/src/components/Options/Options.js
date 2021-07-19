import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Options.module.scss";

const Options = ({ setSortSelection, sortSelection, setDataSelection, dataSelection }) => {
    const handleSortClick = (e) => {
        const selection = e.target.textContent;
        setSortSelection((p) => {
            if (p === selection) return null;
            return selection;
        });
    };
    const handleDataClick = (e) => {
        const selection = e.target.textContent;
        setDataSelection((p) => {
            if (p === selection) return null;
            return selection;
        });
    };

    return (
        <div className={styles["options-container"]}>
            <div className={`container ${styles["options"]}`}>
                <div className={styles["options__sort"]}>
                    <Button
                        handleClick={handleSortClick}
                        isActive={sortSelection === "Bubble Sort"}
                    >
                        Bubble Sort
                    </Button>
                    <Button
                        handleClick={handleSortClick}
                        isActive={sortSelection === "Selection Sort"}
                    >
                        Selection Sort
                    </Button>
                    <Button
                        handleClick={handleSortClick}
                        isActive={sortSelection === "Insertion Sort"}
                    >
                        Insertion Sort
                    </Button>
                </div>
                <div className={styles["options__data"]}>
                    <Button handleClick={handleDataClick} isActive={dataSelection === "Random"}>
                        Random
                    </Button>
                    <Button
                        handleClick={handleDataClick}
                        isActive={dataSelection === "Nearly Sorted"}
                    >
                        Nearly Sorted
                    </Button>
                    <div className={styles["selection-container"]}>
                        <select className={styles["selection"]}>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Options;
