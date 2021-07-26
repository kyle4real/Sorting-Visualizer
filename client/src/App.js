import React, { useState } from "react";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Sorting from "./components/Sorting/Sorting";

function App() {
    const [sortingOn, setSortingOn] = useState(false);
    const [sortSelection, setSortSelection] = useState(null);
    const [dataSelection, setDataSelection] = useState(null);
    const [dataAmount, setDataAmount] = useState(50);

    // console.log(sortSelection);
    // console.log(dataSelection);
    // console.log(dataAmount);

    return (
        <div>
            <Header />
            <Options
                setSortSelection={setSortSelection}
                sortSelection={sortSelection}
                setDataSelection={setDataSelection}
                dataSelection={dataSelection}
                setDataAmount={setDataAmount}
                dataAmount={dataAmount}
                sortingOn={sortingOn}
            />
            <Sorting
                sortSelection={sortSelection}
                dataSelection={dataSelection}
                dataAmount={dataAmount}
                sortingOn={sortingOn}
                setSortingOn={setSortingOn}
            />
        </div>
    );
}

export default App;
