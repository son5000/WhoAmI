import styles from "@/components/Talk/mainPopup.module.css"
import Education from "./education";
import { Icutd } from "./icutd";
import { Contact } from "./contact";

export function MainPopup ({ handleClose, index = 0}) {

    return (
        <div className={styles.container}>
            <div className={styles.header}>header
                <button onClick={handleClose}>닫기</button>
            </div>
            <Content index={index} />
        </div>
    )
}

export function Content ({ index }) {

    switch(index) {
        case 1 : return <Education />;
        case 2 : return <Icutd />;
        case 3 : return <Contact />;
        default :
            return null;
    }
}
