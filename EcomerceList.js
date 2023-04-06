import React from "react";
const ExpanseList = (props) => {
  const deleteHandler = () => {
    const del=document.getElementById(props.id)
    del.remove();
  };

  return (
    <ul>List
        
       
        {props.Expanses.map((Expanse) => (
        
        <li key={Expanse.id}>
          {Expanse.ProductId}-{Expanse.SellingPrice}-{Expanse.ProductName}-{Expanse.Option}
          <button onClick={deleteHandler}>Delete Item</button>
        </li>
    
      ))}
      
    </ul>
  );
};
export default ExpanseList;
