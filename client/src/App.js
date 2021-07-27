import React, { useState } from "react";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Sorting from "./components/Sorting/Sorting";
import SortProvider from "./store/SortProvider";

function App() {
    const [sortingOn, setSortingOn] = useState(false);
    // const [sortSelection, setSortSelection] = useState(null);
    // const [dataSelection, setDataSelection] = useState(null);
    // const [dataAmount, setDataAmount] = useState(50);

    // console.log(sortSelection);
    // console.log(dataSelection);
    // console.log(dataAmount);

    return (
        <SortProvider>
            <Header />
            <Options sortingOn={sortingOn} />
            <Sorting sortingOn={sortingOn} setSortingOn={setSortingOn} />
        </SortProvider>
    );
}

export default App;
