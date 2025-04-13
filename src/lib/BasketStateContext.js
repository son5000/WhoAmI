import { createContext, useContext, useState } from "react";

export const BasketStateContext = createContext();

export function BasketStateProvider ({ children }) {

    const [ basketState, setBasketState ] = useState(false);

    return (
        <BasketStateContext.Provider value={ {basketState,  setBasketState  } }>
            { children }
        </BasketStateContext.Provider>
    )
}

export function useBasketState () {

    const basketState = useContext( BasketStateContext );

    return basketState;
}
