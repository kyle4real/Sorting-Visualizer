import React from "react";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Sorting from "./components/Sorting/Sorting";
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
