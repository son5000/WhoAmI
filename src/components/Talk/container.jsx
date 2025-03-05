import  styles  from "@/components/Talk/container.module.css"
import { TalkNav } from "./nav"
import { TalkContent } from "./content"
import { useState } from "react"

export function TalkContainer () {

    const [ currentTab, setCurrentTab ]  = useState('profile');

    const handleChangeTab = (current) => {
        if(current == currentTab) return;

        return setCurrentTab(current);
    }
    
    return (
        <div className={styles.container}>
            <TalkNav currentTab={currentTab} handleChangeTab={handleChangeTab} />
            <TalkContent currentTab={currentTab} handleChangeTab={handleChangeTab} />            
        </div>
    )
}
