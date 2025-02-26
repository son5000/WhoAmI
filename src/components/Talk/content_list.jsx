import styles from "@/components/Talk/content_list.module.css"
import { useState } from "react"
import { MainPopup } from "./mainPopup";
export function TalkList () {

    const [ listOpen, setListOpen ] = useState(Array(3).fill(false));
    const [ skillsOpen, setSkillsOpen] = useState(Array(2).fill(false));
    const [ popupOpen, setPopupOpen ] = useState(false);
    const [ currentPopup, setCurrentPopup ] = useState(0);

    function handleClickList (number) {
    
        let i = listOpen.indexOf(true);

        if(i == number){
            return setListOpen(Array(3).fill(false));
        }

        let temp = Array(3).fill(false);
        temp[number] = !temp[number]

        return setListOpen([...temp]);
    };
    
    function handleSkills  (number)  {
        let temp = [...skillsOpen];
        temp[number] = !temp[number];
        return setSkillsOpen([...temp]);
    }

    
    const handleClose = () => {
        setPopupOpen(false);
        setCurrentPopup(0);
    }

    const  handleIconClick = (index) => {
        if(currentPopup == index){
            setPopupOpen(false);
            setCurrentPopup(0);
            return;
        }
        setPopupOpen(true);
        setCurrentPopup(index);
    }

    const handleChildClick = (e) => {
      e.stopPropagation();  
    };
        
    return (
        <>
            <ul className={styles.list}>
                <li onClick={() => handleClickList(0)}
                    className={listOpen[0] ? styles.active : ""}>
                    Education
                        <img src="images/Talk/education.png" 
                             alt="" 
                             onClick={(e) => {
                                handleChildClick(e);
                                handleIconClick(1);
                             }}
                        />
                </li>
                <li onClick={(e) => handleClickList(1)}
                    className={listOpen[1] ? styles.active : ""}>
                    project
                    <ul>
                        <li>
                            <div onClick={(e) => {
                                    handleChildClick(e);
                                    handleIconClick(2);
                                 }}    
                            >
                                <img src="images/Talk/인천.png" alt="" />
                                <p>Icutd</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li onClick={(e) => handleClickList(2)}
                    className={listOpen[2] ? styles.active : ""}>
                    contact
                        <img src="images/Talk/contact.png" alt="" />
                </li>
                <li onClick={() => handleSkills(0)}
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
                <li onClick={() => handleSkills(1)}
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
            
            { popupOpen && <MainPopup handleClose={handleClose} index={currentPopup} /> } 
        </>
    )
}