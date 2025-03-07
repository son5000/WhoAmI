import styles from "@/components/Talk/mainPopup.module.css"
import { Education } from "./education";
import { Icutd } from "./icutd";
import { Contact } from "./contact";
import { GuestBook } from "./guestBook";

export function MainPopup ({ handleClose, category }) {
    
    return (
        <div className={ category === 'GuestBook' ? [styles.container , styles.guestBook].join(' ') : styles.container }>
            <div className={styles.header}>header
                <button onClick={handleClose}>닫기</button>
            </div>
            <Content category={category} />
        </div>
    )
}

export function Content ({ category }) {

    switch(category) {
        case 'Education' : return <Education />;
        case 'Icutd' : return <Icutd />;
        case 'Contact' : return <Contact />;
        case 'GuestBook' : return <GuestBook className={styles.guestBook}/>
        default :
            return null;
    }
}
