import styles from "@/components/Talk/profilePopup.module.css"

export function ProfilePopup ({handleProfileOpen }) {

return (
    <div className={styles.container}>
        <div>
            <button onClick={() => handleProfileOpen()}>X</button>
        </div>
        <img src="/images/Talk/profile-icon.png" alt="" />
        <div>
            <span>Son Han je</span>
        </div>
    </div>
)
}