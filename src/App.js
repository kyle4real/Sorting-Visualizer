import React, { useState } from "react";
import CompareSort from "./components/CompareSort/CompareSort";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Sorting from "./components/Sorting/Sorting";
import SortProvider from "./store/SortProvider";

function App() {
    const [compareSort, setCompareSort] = useState(false);

    const toggleCompareSortHandler = () => {
        setCompareSort((p) => !p);
    };

    return (
        <SortProvider>
            <Header toggleCompareSort={toggleCompareSortHandler} />
            {!compareSort && <Options />}
            {compareSort ? <CompareSort /> : <Sorting />}
        </SortProvider>
    );
}

export default App;
