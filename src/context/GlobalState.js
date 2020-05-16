import React, {CreateContext, useReducer, createContext} from 'react'


const initialState = {
    transactions: [
        {id:1, text: 'Flower', amount: -20}
        ,{id:2, text: 'Salary', amount: 200}
        ,{id:3, text: 'Camera', amount: -920}
        ,{id:4, text: 'Laptop', amount: 400}

    ]
}

export const GlobalContext =  createContext(initialState)

export const GlobalProvider = ({childern}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider
    value={{transactions: state.transactions}}>
        {childern}
    </GlobalContext.Provider>)
}