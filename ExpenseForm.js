import React, { useState } from "react";
const ExpanseForm = (props) => {
  const [ProductId, setEnterProductId] = useState("");
  const [SellingPrice, setEnterSellingPrice] = useState("");
  const [ProductName, setEnterProductName] = useState("");
  const [Option, setEnterOption] = useState("");
  const addId = (event) => {
    setEnterProductId(event.target.value);
  };
  const addPrice = (event) => {
    setEnterSellingPrice(event.target.value);
  };
  const addProduct = (event) => {
    setEnterProductName(event.target.value);
  };
  const addOption = (event) => {
    setEnterOption(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    props.onAddExpanse(ProductId, SellingPrice,ProductName, Option);
    setEnterProductId("");
    setEnterSellingPrice("");
    setEnterProductName("");
    setEnterOption("");
  };

  return (
    <div className="expanse-form">
      <form onSubmit={SubmitHandler}>
        <div>
          <label htmlFor="A">ProductID</label>
          <input
            type="number"
            id="A"
            value={ProductId}
            onChange={addId}
          ></input>
        </div>
        <div>
          <label htmlFor="D">SellingPrice</label>
          <input
            type="text"
            id="D"
            value={SellingPrice}
            onChange={addPrice}
          ></input>
        </div>
        <div>
          <label htmlFor="D">ProductName:</label>
          <input
            type="text"
            id="D"
            value={ProductName}
            onChange={addProduct}
          ></input>
        </div>
        <div>
          <label htmlFor="C"> Category</label>
          <select id="C" value={Option} onChange={addOption}>
            <option>choose Category </option>
            <option>electronics</option>
            <option>book</option>
            <option>tv</option>
          </select>
        </div>
        <div>
          <button type="submit"> Add New Item</button>
        </div>
      </form>
    </div>
  );
};
export default ExpanseForm;
