import React, { useState } from "react";
import CompareSort from "./components/CompareSort/CompareSort";
import Header from "./components/Header/Header";
import Options from "./components/Options/Options";
import Sorting from "./components/Sorting/Sorting";
import SortProvider from "./store/SortProvider";

function App() {
  const [combineSort, setCombineSort] = useState(false);

  const combineSortHandler = () => {
    setCombineSort((p) => !p);
  };

  return (
    <SortProvider>
      <Header combineSort={combineSortHandler} />
      <Options />
      {combineSort && <Sorting />}
      {!combineSort && <CompareSort />}
    </SortProvider>
  );
}

export default App;
