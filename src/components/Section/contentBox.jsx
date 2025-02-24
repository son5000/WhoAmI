import styles from "@/components/Section/contentBox.module.css"
import { useMainPopupState } from "@/lib/mainPopupContext"

export function ContentLayOut ({children}) {

    const { setMainPopupState } = useMainPopupState();

    function handleClose () {
        setMainPopupState(0);
    }

    return (
        <div className={styles.overlay}>
            overlay
            <div>
                <div className={styles.header}>header
                    <button onClick={() => handleClose()}>닫기</button>
                </div>
                {children}
            </div>
        </div>
    )
}