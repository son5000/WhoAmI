import styles from "@/components/Talk/content_list.module.css"
import { useState } from "react"
import { MainPopup } from "./mainPopup";
import { guestBook } from "./guestBook";

export function TalkList ({currentTab}) {

    const [ listOpen, setListOpen ] = useState(Array(4).fill(false));
    const [ skillsOpen, setSkillsOpen] = useState(null);
    const [ popupOpen, setPopupOpen ] = useState(false);
    const [ currentPopup, setCurrentPopup ] = useState('');

    function handleClickList (tabIndex) {
        let temp = [...listOpen];
        temp[tabIndex] = !temp[tabIndex];
        return setListOpen(temp);
    };
    
    const handleSkills = (tabIndex) => {
        setSkillsOpen(skillsOpen === tabIndex ? null : tabIndex)
    }
    
    const handleClose = () => {
        setPopupOpen(false);
        setCurrentPopup('');
    }

    const  handleIconClick = (category) => {
        if(currentPopup == category){
            setPopupOpen(false);
            setCurrentPopup('');
            return;
        }
        setPopupOpen(true);
        setCurrentPopup(category);
    }

    const handleChildClick = (e) => {
      e.stopPropagation();  
    };

    return (
        <>
            { currentTab === "profile" ? (
                <>
                    <ul className={styles.list}>
                        <li onClick={() => handleClickList(0)}
                            className={listOpen[0] ? styles.active : ""}>
                            Education
                            <img src="images/Talk/education.png"
                                 alt=""
                                 onClick={(e) => {
                                     handleChildClick(e);
                                     handleIconClick('Education');
                                 }}
                            />
                        </li>
                        <li onClick={(e) => handleClickList(1)}
                            className={listOpen[1] ? styles.active : ""}>
                            Project
                            <ul>
                                <li>
                                    <div onClick={(e) => {
                                        handleChildClick(e);
                                        handleIconClick('Icutd');
                                    }}>
                                        <img src="images/Talk/인천.png" alt="" />
                                        <p>Icutd</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li onClick={(e) => handleClickList(2)}
                            className={listOpen[2] ? styles.active : ""}>
                            Contact
                            <img
                                src="images/Talk/contact.png"
                                alt=""
                                onClick={(e) => {
                                    handleChildClick(e);
                                    handleIconClick('Contact');
                                }}
                            />
                        </li>
                        <li onClick={() => handleSkills(1)}
                            className={skillsOpen === 1 ? styles.active : ""}>
                            Learned Skills
                            <ul onClick={handleChildClick}>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>Express</li>
                            </ul>
                        </li>
                        <li onClick={() => handleSkills(2)}
                            className={skillsOpen === 2 ? styles.active : ""}>
                            Skills Being Learned
                            <ul onClick={handleChildClick}>
                                <li>SQL</li>
                                <li>MongoDB</li>
                                <li>Redis</li>
                                <li>AWS</li>
                                <li>Prisma</li>
                            </ul>
                        </li>
                    </ul>
                    {popupOpen && <MainPopup handleClose={handleClose} category={currentPopup} />}
                </>
            ) : (
                <>
                    <ul className={styles.list}>
                        <li onClick={() => handleClickList(3)}
                            className={listOpen[3] ? styles.active : ""}>
                            Please leave a comment
                            <div className={styles.guestBook}>
                                <img 
                                     src="images/Talk/guestBook-icon.png"
                                     alt="말풍선 아이콘"
                                     onClick={(e) => {
                                         handleChildClick(e);
                                         handleIconClick('GuestBook');
                                        }}
                                        />
                                <span>Click this icon !</span>
                            </div>
                        </li>
                    </ul>
                    {popupOpen && <MainPopup handleClose={handleClose} category={currentPopup} />}
                </>
            )}
        </>
    );
    
}
