import styles from "@/components/Talk/profilePopup.module.css"

export function ProfilePopup ({handleProfileOpen }) {

return (
    <div className={styles.container}>
        <div>
            <button>배경</button>
            <button onClick={() => handleProfileOpen()}>X</button>
        </div>
        <img src="/images/Talk/profile-icon.png" alt="" />
        <div>
            <button>저를 소개합니다.</button>
        </div>
    </div>
)
}