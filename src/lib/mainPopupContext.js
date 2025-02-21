import { createContext, useContext, useState } from "react";

export const MainPopupContext = createContext();

export function MainPopupProvider ({ children }) {

    const [ mainPopupState, setMainPopupState ] = useState(0);

    return (
        <MainPopupContext.Provider value={ {mainPopupState, setMainPopupState} }>
            { children }
        </MainPopupContext.Provider>
    )
}

export function useMainPopupState () {

    const mainPopupState = useContext( MainPopupContext );
    return mainPopupState;
}
