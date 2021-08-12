import React, { useContext } from "react";
import SortContext from "../../store/sort-context";
import Button from "../UI/Button/Button";

import classes from "./Options.module.scss";

const Options = () => {
  const sortCtx = useContext(SortContext);

  return (
    <div className={classes.options__container}>
      <div className={`container ${classes.options}`}>
        <div className={classes.options__sort}>
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
        <div className={classes.options__data}>
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
          <div className={classes.options__selection}>
            <select
              disabled={sortCtx.sortingOn}
              className={classes.options__selection__select}
              onChange={sortCtx.changeDataAmount}
              value={sortCtx.dataAmount}
            >
              <option value="150">50</option>
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
