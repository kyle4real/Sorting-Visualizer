import React from "react";
import Button from "../UI/Button/Button";
import styles from "./Options.module.scss";

const Options = ({
    setSortSelection,
    sortSelection,
    setDataSelection,
    dataSelection,
    setDataAmount,
    dataAmount,
    sortingOn,
}) => {
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

    const handleAmountChange = (e) => {
        const selection = e.target.value;
        setDataAmount(+selection);
    };

    return (
        <div className={styles["options-container"]}>
            <div className={`container ${styles["options"]}`}>
                <div className={styles["options__sort"]}>
                    <Button
                        handleClick={handleSortClick}
                        isActive={sortSelection === "Bubble Sort"}
                        disabled={sortingOn}
                    >
                        Bubble Sort
                    </Button>
                    <Button
                        handleClick={handleSortClick}
                        isActive={sortSelection === "Selection Sort"}
                        disabled={sortingOn}
                    >
                        Selection Sort
                    </Button>
                    <Button
                        handleClick={handleSortClick}
                        isActive={sortSelection === "Insertion Sort"}
                        disabled={sortingOn}
                    >
                        Insertion Sort
                    </Button>
                </div>
                <div className={styles["options__data"]}>
                    <Button
                        handleClick={handleDataClick}
                        isActive={dataSelection === "Random"}
                        disabled={sortingOn}
                    >
                        Random
                    </Button>
                    <Button
                        handleClick={handleDataClick}
                        isActive={dataSelection === "Nearly Sorted"}
                        disabled={sortingOn}
                    >
                        Nearly Sorted
                    </Button>
                    <div className={styles["selection-container"]}>
                        <select
                            disabled={sortingOn}
                            className={styles["selection"]}
                            onChange={handleAmountChange}
                            value={dataAmount}
                        >
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
