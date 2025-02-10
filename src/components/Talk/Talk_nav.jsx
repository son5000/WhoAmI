import styles from "@/components/Talk/Talk_nav.module.css"

export function TalkNav () {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <img src="/images/Talk/me-icon-검.png" alt="" />
                </li>
                <li>
                    <img src="/images/Talk/말풍선-icon-회.png" alt="" />
                    <span>99</span>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="/images/Talk/github.png" alt="" />
                </li>
                <li>
                    <img src="/images/Talk/instagram.png" alt="" />
                </li>
                <li>
                    <img src="/images/Talk/notion.png" alt="" />
                </li>
            </ul>
        </nav>
    )
}