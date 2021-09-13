import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";

import classes from "./SortOptions.module.scss";

const sorttypes = ["Bubble Sort", "Selection Sort", "Insertion Sort"];
const datatypes = ["Random", "Nearly Sorted"];

const intitialOptionState = {
    sorttype: null,
    datatype: null,
    dataamount: 50,
};

const SortOptions = ({ addToCompareList }) => {
    const [optionState, setOptionState] = useState(intitialOptionState);

    useEffect(() => {
        if (optionState.sorttype !== null && optionState.datatype !== null) {
            addToCompareList({ ...optionState });
            setOptionState(intitialOptionState);
        }
    }, [optionState, addToCompareList]);

    return (
        <div className={classes.sortoptions}>
            <span className={classes.label}>1) Choose Sort</span>
            <div className={classes.sorttype}>
                {sorttypes.map((sorttype, index) => (
                    <Button
                        key={index}
                        onClick={() =>
                            setOptionState((p) => {
                                let newValue = p.sorttype === sorttype ? null : sorttype;
                                return { ...p, sorttype: newValue };
                            })
                        }
                        isActive={optionState.sorttype === sorttype}
                    >
                        {sorttype}
                    </Button>
                ))}
            </div>
            <span className={classes.label}>2) Choose Data</span>
            <div className={classes.datatype}>
                {datatypes.map((datatype, index) => (
                    <Button
                        key={index}
                        onClick={() =>
                            setOptionState((p) => {
                                let newValue = p.datatype === datatype ? null : datatype;
                                return { ...p, datatype: newValue };
                            })
                        }
                        isActive={optionState.datatype === datatype}
                    >
                        {datatype}
                    </Button>
                ))}
            </div>
            <span className={classes.label}>(optional) Choose Data Amount</span>
            <div className={classes.selection}>
                <select
                    className={classes.selection__select}
                    onChange={(e) => setOptionState((p) => ({ ...p, dataamount: +e.target.value }))}
                    value={optionState.dataamount}
                >
                    <option value="150">50</option>
                    <option value="30">30</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    );
};

export default SortOptions;
