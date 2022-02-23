import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Comp2() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashRed.cash);

  const getRandom = () => {
    let random = Math.floor(Math.random() * 10) + 1;
    dispatch({ type: "RANDOM_CASH", payload: random });
  };

  return (
    <div>
      {cash}
      <button onClick={() => dispatch({ type: "ADD_CASH", payload: 10 })}>Add Cash</button>
      <button onClick={() => dispatch({ type: "REMOVE_CASH", payload: 15 })}>Remove Cash</button>
      <button onClick={getRandom}>Add Random</button>
    </div>
  );
}

export default Comp2;
