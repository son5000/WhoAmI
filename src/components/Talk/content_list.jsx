import styles from "@/components/Talk/content_list.module.css"
import { useState } from "react"

export function TalkList () {
    const [ listOpen, setListOpen ] = useState(Array(5).fill(false));

    function handleClick (number) {
        let temp = listOpen.slice();
        temp[number] = !temp[number];

        return setListOpen([...temp])
    }
    console.log(listOpen);

    return (
        <ul className={styles.list}>
                <li onClick={() => handleClick(0)}
                    className={listOpen[0] ? styles.active : ""}>
                    Education</li>
                <li onClick={() => handleClick(1)}
                    className={listOpen[1] ? styles.active : ""}>
                    project</li>
                <li onClick={() => handleClick(2)}
                    className={listOpen[2] ? styles.active : ""}>
                    contact</li>
                <li onClick={() => handleClick(3)}
                    className={listOpen[3] ? styles.active : ""}>
                    Learned Skills
                    <ul>
                        <li>JavaScript</li>
                        <li>Html</li>
                        <li>Css</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Express</li>
                    </ul>
                </li>
                <li onClick={() => handleClick(4)}
                    className={listOpen[4] ? styles.active : ""}>
                    Skills Being Learned 
                    <ul>
                        <li>Sql</li>
                        <li>MongoDb</li>
                        <li>Redis</li>
                        <li>Aws</li>
                        <li>Prisma</li>
                    </ul>
                </li>
            </ul>
    )
}