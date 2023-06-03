import { createContext, useReducer } from "react";

let DispatchContext=createContext()
let CartStateContext=createContext()
const AppProvider=(props)=>{

    const initialState=[]
    const reducer=(state,action)=>{
        switch (action.type) {
            case 'add-to-cart':
                return [action.payload,...state]
        }
    }
    let [cartState,setCartDispatch]=useReducer(reducer,initialState)
    // console.log(' State',cartState);

    const dispatchHelper=({type,payload})=>{
        // console.log('obt',payload);

        let isExist=cartState.find(items=>items.name===payload.name)
        isExist?alert('item alresdy exist in the cart'): setCartDispatch({type:type,payload:payload})
       

    }
    return(
        <DispatchContext.Provider value={dispatchHelper}>
            <CartStateContext.Provider value={cartState}>
                {props.children}
            </CartStateContext.Provider>
        </DispatchContext.Provider>
    )
}

export{
    DispatchContext,
    CartStateContext,
    AppProvider  
}