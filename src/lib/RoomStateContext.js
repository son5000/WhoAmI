import { createContext, useContext, useState } from "react";

export const RoomStateContext = createContext();

export function RoomStateProvider ({ children }) {

    const [ roomState, setRoomState ] = useState(false);

    return (
        <RoomStateContext.Provider value={ {roomState,  setRoomState  } }>
            { children }
        </RoomStateContext.Provider>
    )
}

export function useRoomState () {

    const roomState = useContext( RoomStateContext );

    return roomState;
}
