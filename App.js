import React, { useState } from "react";

import "./App.css";
import ExpanseForm from "./components/ExpenseForm";
import ExpanseList from "./components/EcomerceList";
const App = () => {
  const [expanseList, setExpanseList] = useState([]);
  const addExpanseHandler = (uProductId, uSellingPrice, uProductName,uOption) => {
    setExpanseList((prevExpanseList) => {
      return [
        ...prevExpanseList,
        {
          ProductId: uProductId,
          SellingPrice: uSellingPrice,
          ProductName: uProductName,
          Option: uOption,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className="App">
      <ExpanseForm onAddExpanse={addExpanseHandler} />
      <ExpanseList Expanses={expanseList} />
    </div>
  );
};

export default App;
