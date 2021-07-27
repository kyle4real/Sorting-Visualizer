import React from "react";

const SortContext = React.createContext({
    sortingOn: false,
    sortSelection: null,
    dataSelection: null,
    dataAmount: 50,
    changeSort: (type) => {},
    changeData: (type) => {},
    changeDataAmount: (amount) => {},
});

export default SortContext;
