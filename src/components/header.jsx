import styles from "@/components/header.module.css"
import {format, getHours, getMinutes} from "date-fns"

export function Header () {

    
    const today = new Date();
    const formatedDate = format(today , 'yyyy-MM-dd')
    const hours = getHours(today);
    const minutes = getMinutes(today);
    const period = hours >= 12 ? '오후' : '오전';
    const hours12 = hours % 12 || 12;

    return (
        <div className={styles.header}>
            <img src="/images/Section/wifi_icon.png" alt="와이파이 아이콘" />
            <img src="/images/Section/energy_icon.png" alt="배터리 아이콘" />
            <p>{formatedDate} {period} {hours}:{minutes}</p>
        </div>
    )
}