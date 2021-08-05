import React, { useContext } from "react";
import SortContext from "../../store/sort-context";
import Button from "../UI/Button/Button";
import styles from "./Options.module.scss";

const Options = () => {
    const sortCtx = useContext(SortContext);

    return (
        <div className={styles["options-container"]}>
            <div className={`container ${styles["options"]}`}>
                <div className={styles["options__sort"]}>
                    <Button
                        handleClick={sortCtx.changeSort}
                        isActive={sortCtx.sortSelection === "Bubble Sort"}
                        disabled={sortCtx.sortingOn}
                    >
                        Bubble Sort
                    </Button>
                    <Button
                        handleClick={sortCtx.changeSort}
                        isActive={sortCtx.sortSelection === "Selection Sort"}
                        disabled={sortCtx.sortingOn}
                    >
                        Selection Sort
                    </Button>
                    <Button
                        handleClick={sortCtx.changeSort}
                        isActive={sortCtx.sortSelection === "Insertion Sort"}
                        disabled={sortCtx.sortingOn}
                    >
                        Insertion Sort
                    </Button>
                </div>
                <div className={styles["options__data"]}>
                    <Button
                        handleClick={sortCtx.changeData}
                        isActive={sortCtx.dataSelection === "Random"}
                        disabled={sortCtx.sortingOn}
                    >
                        Random
                    </Button>
                    <Button
                        handleClick={sortCtx.changeData}
                        isActive={sortCtx.dataSelection === "Nearly Sorted"}
                        disabled={sortCtx.sortingOn}
                    >
                        Nearly Sorted
                    </Button>
                    <div className={styles["selection-container"]}>
                        <select
                            disabled={sortCtx.sortingOn}
                            className={styles["selection"]}
                            onChange={sortCtx.changeDataAmount}
                            value={sortCtx.dataAmount}
                        >
                            <option value="50">50</option>
                            <option value="30">30</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Options;
