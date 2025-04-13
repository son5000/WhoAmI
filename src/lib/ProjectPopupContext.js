import { createContext, useContext, useState } from "react";

export const projectPopupState = createContext();

export function ProjectPopupStateProvider ({ children }) {

    const [ projectState, setProjectState ] = useState(null);

    return (
        <projectPopupState.Provider value={ { projectState,  setProjectState } }>
            { children }
        </projectPopupState.Provider>
    )
}

export function useProjectState () {

    const projectState = useContext( projectPopupState );

    return projectState;
}
