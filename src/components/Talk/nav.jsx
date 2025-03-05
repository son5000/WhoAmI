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
                    <span>99</span>
                </li>
            </ul>
            <ul>
                <li>
                    <img src={theme === "light" ? 
                            "/images/Talk/github.png" : "/images/Talk/github-icon-dark.png"} 
                         alt="github icon" />
                </li>
                <li>
                    <img src={theme === 'light' ? 
                            "/images/Talk/instagram.png" : "/images/Talk/insta-icon-dark.png"}
                         alt="instagram icon" />
                </li>
                <li>
                    <img src={theme === "light" ? 
                            "/images/Talk/notion.png" : "/images/Talk/notion-icon-dark.png"}
                         alt="notion icon" />
                </li>
            </ul>
        </nav>
    )
}