import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Sorting from "./components/Sorting/Sorting";
import SortContext from "./store/sort-context";
import SortProvider from "./store/SortProvider";

function App() {
    return (
        <SortProvider>
            <Header />
            <Options />
            <Sorting />
        </SortProvider>
    );
}

export default App;
