import  styles  from "@/components/Talk/container.module.css"
import { TalkNav } from "./nav"
import { TalkContent } from "./content"
import { useState } from "react"

export function TalkContainer () {

    return (
        <div className={styles.container}>
            <TalkNav />
            <TalkContent />            
        </div>
    )
}