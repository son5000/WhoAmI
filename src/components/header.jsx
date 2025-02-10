import styles from "@/components/header.module.css"

export function Header () {
    return (
        <div className={styles.header}>
            <img src="/images/Section/wifi_icon.png" alt="와이파이 아이콘" />
            <img src="/images/Section/5g_icon.png" alt="5g 아이콘" />
            <img src="/images/Section/energy_icon.png" alt="배터리 아이콘" />
            <p>(일) 오전 1:44</p>
        </div>
    )
}