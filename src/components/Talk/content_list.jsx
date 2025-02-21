import styles from "@/components/Talk/content_list.module.css"
import { useEffect, useState } from "react"
import { useMainPopupState } from "@/lib/mainPopupContext";
export function TalkList () {

    const { setMainPopupState } = useMainPopupState();
    const [ listOpen, setListOpen ] = useState(Array(3).fill(false));
    const [ skillsOpen, setSkillsOpen] = useState(Array(2).fill(false));

    function handleClick (number) {
    
        let i = listOpen.indexOf(true);

        if(i == number){
            return setListOpen(Array(3).fill(false)), setMainPopupState(0);
        }
        let temp = Array(3).fill(false);

        temp[number] = !temp[number]

        return setListOpen([...temp]), setMainPopupState(number + 1);
    };

    function handdleSkills  (number)  {
        let temp = [...skillsOpen];
        temp[number] = !temp[number];
        return setSkillsOpen([...temp]);
    }

    const handleChildClick = (e) => {
      e.stopPropagation();  
    };
        
    return (
        <ul className={styles.list}>
                <li onClick={() => handleClick(0)}
                    className={listOpen[0] ? styles.active : ""}>
                    Education
                        <img src="images/Talk/education.png" alt="" />
                    </li>
                <li onClick={(e) => handleClick(1)}
                    className={listOpen[1] ? styles.active : ""}>
                    project</li>
                <li onClick={(e) => handleClick(2)}
                    className={listOpen[2] ? styles.active : ""}>
                    contact</li>
                <li onClick={() => handdleSkills(0)}
                    className={skillsOpen[0] ? styles.active : ""}>
                    Learned Skills
                    <ul onClick={handleChildClick}>
                        <li>JavaScript</li>
                        <li>Html</li>
                        <li>Css</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Express</li>
                    </ul>
                </li>
                <li onClick={() => handdleSkills(1)}
                    className={skillsOpen[1] ? styles.active : ""}>
                    Skills Being Learned 
                    <ul onClick={handleChildClick}>
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