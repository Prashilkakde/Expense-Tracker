import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState ={
transactions : [
    //   { id: 1, text: 'Flower', amount: -2000 },
    //   { id: 2, text: 'Salary', amount: 30000 },
    //   { id: 3, text: 'Book', amount: -100 },
    //   { id: 4, text: 'Camera', amount: -5500 },
    //   { id: 5, text: 'Bonus', amount: 6700 }

    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider =({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

     // Actions for Add transactions

     function addTrans(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    // Actions for Delete

    function deleteTrans(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTrans,
        addTrans
    }}>{children}</GlobalContext.Provider>)
}