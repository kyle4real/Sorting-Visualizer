import React, { useContext } from "react";
import SortContext from "../../store/sort-context";
import Button from "../UI/Button/Button";
import styles from "./Options.module.scss";

const Options = ({ sortingOn }) => {
    const sortCtx = useContext(SortContext);

    return (
        <div className={styles["options-container"]}>
            <div className={`container ${styles["options"]}`}>
                <div className={styles["options__sort"]}>
                    <Button
                        handleClick={sortCtx.changeSort}
                        isActive={sortCtx.sortSelection === "Bubble Sort"}
                        disabled={sortingOn}
                    >
                        Bubble Sort
                    </Button>
                    <Button
                        handleClick={sortCtx.changeSort}
                        isActive={sortCtx.sortSelection === "Selection Sort"}
                        disabled={sortingOn}
                    >
                        Selection Sort
                    </Button>
                    <Button
                        handleClick={sortCtx.changeSort}
                        isActive={sortCtx.sortSelection === "Insertion Sort"}
                        disabled={sortingOn}
                    >
                        Insertion Sort
                    </Button>
                </div>
                <div className={styles["options__data"]}>
                    <Button
                        handleClick={sortCtx.changeData}
                        isActive={sortCtx.dataSelection === "Random"}
                        disabled={sortingOn}
                    >
                        Random
                    </Button>
                    <Button
                        handleClick={sortCtx.changeData}
                        isActive={sortCtx.dataSelection === "Nearly Sorted"}
                        disabled={sortingOn}
                    >
                        Nearly Sorted
                    </Button>
                    <div className={styles["selection-container"]}>
                        <select
                            disabled={sortingOn}
                            className={styles["selection"]}
                            onChange={sortCtx.changeDataAmount}
                            value={sortCtx.dataAmount}
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
