import styles from "@/components/Section/header.module.css"
import {format} from "date-fns"
import { useEffect, useState } from "react";

export function Header () {

    const [ currentTime, setCurrentTime ] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        },60000)
        return () => clearInterval(interval);
    },[]);

    const today = currentTime;
    const formatedDate = format(today , 'yyyy-MM-dd--hh--mm')
    const date =formatedDate.split('--')[0];
    const hours = formatedDate.split('--')[1];
    const minutes = formatedDate.split('--')[2];
    const period = hours >= 12 ? '오후' : '오전';

    return (
        <div className={styles.header}>
            <img src="/images/Section/wifi_icon.png" alt="와이파이 아이콘" />
            <img src="/images/Section/energy_icon.png" alt="배터리 아이콘" />
            <p>{date} {period} {hours}:{minutes}</p>
        </div>
    )
}