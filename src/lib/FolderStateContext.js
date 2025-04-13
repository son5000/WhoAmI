import { createContext, useContext, useState } from "react";

export const FolderState = createContext();

export function FolderStateProvider ({ children }) {

    const [ folderState, setFolderState ] = useState(false);

    return (
        <FolderState.Provider value={ { folderState,  setFolderState } }>
            { children }
        </FolderState.Provider>
    )
}

export function useFolderState () {

    const folderState = useContext( FolderState );

    return folderState;
}
