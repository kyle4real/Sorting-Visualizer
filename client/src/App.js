import React, { useState } from "react";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Sorting from "./components/Sorting/Sorting";

function App() {
    const [sortSelection, setSortSelection] = useState(null);
    const [dataSelection, setDataSelection] = useState(null);

    console.log(sortSelection);
    console.log(dataSelection);

    return (
        <div>
            <Header />
            <Options
                setSortSelection={setSortSelection}
                sortSelection={sortSelection}
                setDataSelection={setDataSelection}
                dataSelection={dataSelection}
            />
            <Sorting sortSelection={sortSelection} dataSelection={dataSelection} />
        </div>
    );
}

export default App;
