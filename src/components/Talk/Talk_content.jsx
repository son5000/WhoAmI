import styles from "@/components/Talk/Talk_content.module.css"
import { ThemeButton } from "./Talk_Theme_button"
import { TalkList } from "./Talk_content_list"

export function TalkContent () {

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
                <img src="/images/Talk/profile-icon.png" alt="프로필 아이콘" />
                <p>Hanje</p>
            </div>
            <TalkList />
        </div>
    )
}