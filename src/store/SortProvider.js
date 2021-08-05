import { useReducer } from "react";

import SortContext from "./sort-context";

const defaultSortState = {
    sortingOn: false,
    sortSelection: null,
    dataSelection: null,
    dataAmount: 50,
};

const sortReducer = (state, action) => {
    if (action.type === "SORTING_ON") {
        return { ...state, sortingOn: !state.sortingOn };
    }
    if (action.type === "SORT_SELECT") {
        const isSame = action.payload === state.sortSelection;
        return { ...state, sortSelection: isSame ? null : action.payload };
    }
    if (action.type === "DATA_SELECT") {
        const isSame = action.payload === state.dataSelection;
        return { ...state, dataSelection: isSame ? null : action.payload };
    }
    if (action.type === "DATA_AMOUNT") {
        return { ...state, dataAmount: action.payload };
    }
    return defaultSortState;
};

const SortProvider = (props) => {
    const [sortState, dispatch] = useReducer(sortReducer, defaultSortState);

    const changeSortingOnHandler = () => {
        dispatch({ type: "SORTING_ON" });
    };

    const changeSortHandler = (selection) => {
        selection = selection.target.textContent;
        dispatch({ type: "SORT_SELECT", payload: selection });
    };
    const changeDataHandler = (selection) => {
        selection = selection.target.textContent;
        dispatch({ type: "DATA_SELECT", payload: selection });
    };
    const changeDataAmountHandler = (selection) => {
        selection = selection.target.value;
        dispatch({ type: "DATA_AMOUNT", payload: +selection });
    };

    const sortContext = {
        sortingOn: sortState.sortingOn,
        sortSelection: sortState.sortSelection,
        dataSelection: sortState.dataSelection,
        dataAmount: sortState.dataAmount,
        changeSortingOn: changeSortingOnHandler,
        changeSort: changeSortHandler,
        changeData: changeDataHandler,
        changeDataAmount: changeDataAmountHandler,
    };

    return <SortContext.Provider value={sortContext}>{props.children}</SortContext.Provider>;
};

export default SortProvider;
