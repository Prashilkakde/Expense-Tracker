import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTrans } = useContext(GlobalContext);

  const onSubmit = (e) => {
    if (text && amount) {
      e.preventDefault();

      const newTrans = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
      };
      addTrans(newTrans);
    }
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Negative - Expense, Positive - Income)
          </label>
          <input
            type="number"
            placeholder="Enter Amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          className="btn"
          onClick={ 
            onSubmit
         }
        //  onClick={()=>{setText(""); setAmount(); onSubmit()}}
        >
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
