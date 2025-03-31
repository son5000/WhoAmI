import { createContext, useContext, useState } from "react";

export const TalkStateContext = createContext();

export function TalkStateProvider ({ children }) {

    const [ talkState, setTalkState ] = useState(true);

    return (
        <TalkStateContext.Provider value={ {talkState, setTalkState} }>
            { children }
        </TalkStateContext.Provider>
    )
}

export function useTalkState () {

    const talkState = useContext( TalkStateContext );

    return talkState;
}
