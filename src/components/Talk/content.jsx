import styles from "@/components/Talk/content.module.css"
import { ThemeButton } from "./Theme_button"
import { TalkList } from "./content_list"
import { ProfilePopup } from "./profilePopup"
import { useState } from "react"

export function TalkContent () {
    
    const [ profileOpen, setProfileOpen ] = useState(false);

    function handleProfileOpen () {
        return setProfileOpen(!profileOpen);
    }

    return (
        <div className={styles.content}>
            <div className={styles.windowButtons}>
                <button>최소화</button>
                <button>최대화</button>
                <button>닫기</button>
            </div>
            <div className={styles.title}>
                <p>Hi There :-)</p>
                <ThemeButton />
            </div>
            <div className={styles.profile}>
                <img 
                    onClick={() => handleProfileOpen()} 
                    src="/images/Talk/profile-icon.png" 
                    alt="프로필 아이콘" />
                <p>Hanje</p>
                {profileOpen &&
                    <ProfilePopup 
                    profileOpen={profileOpen} 
                    handleProfileOpen={handleProfileOpen} />
                }
            </div>
            <TalkList />
        </div>
    )
}