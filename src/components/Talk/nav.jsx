import styles from "@/components/Talk/nav.module.css"
import { useTheme } from "@/lib/ThemeContext"

export function TalkNav ({currentTab, handleChangeTab}) {

    const {theme} = useTheme();

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <img onClick={() => handleChangeTab("profile")}
                         src={currentTab === "profile" ? "/images/Talk/me-icon-검.png" : "/images/Talk/me-icon-회.png"}
                         alt="profile icon" 
                    />
                </li>
                <li>
                    <img onClick={() => handleChangeTab("guestBook")}
                         src={currentTab === "guestBook" ? "/images/Talk/말풍선-icon-검.png" : "/images/Talk/말풍선-icon-회.png"}
                         alt="text block icon" 
                    />
                    <span>🤍</span>
                </li>
            </ul>
            <ul>
                <li>
                    <a target="_blank" href="https://github.com/son5000">
                        <img src={theme === "light" ? 
                                "/images/Talk/github.png" : "/images/Talk/github-icon-dark.png"} 
                             alt="github icon" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://great-debt-2b0.notion.site/Note-10ab853ac11a80169754e0272445fae7?pvs=4">
                        <img src={theme === "light" ? 
                                "/images/Talk/notion.png" : "/images/Talk/notion-icon-dark.png"}
                                alt="notion icon" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.instagram.com/sxnlikecoye_?igsh=OGhmMnBhZWpmZGRy&utm_source=qr">
                        <img src={theme === 'light' ? 
                                "/images/Talk/instagram.png" : "/images/Talk/insta-icon-dark.png"}
                                alt="instagram icon" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}