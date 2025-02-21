import styles from "@/components/Section/content.module.css"
import { Room } from "./room"
import { ContentLayOut } from "./contentBox"
import { useMainPopupState } from "@/lib/mainPopupContext"

export function Content () {

  const { mainPopupState } = useMainPopupState();

    return (
      <div className={styles.content}>
          <Room />
          { mainPopupState ? <ContentLayOut Popuptype={mainPopupState[1]}/> : null }    
      </div>
    )
}
