import  styles  from "@/components/Talk/Talk_container.module.css"
import { TalkNav } from "./Talk_nav"
import { TalkContent } from "./Talk_content"


export function TalkContainer () {

    return (
        <div className={styles.container}>
            <TalkNav />
            <TalkContent />            
        </div>
    )
}