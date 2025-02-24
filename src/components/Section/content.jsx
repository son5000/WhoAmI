import styles from "@/components/Section/content.module.css"
import { Room } from "./room"
import { ContentLayOut } from "./contentBox"
import Education from "./education"
import { useMainPopupState } from "@/lib/mainPopupContext"

export function Content () {

  const { mainPopupState } = useMainPopupState();

  console.log(mainPopupState);

    return (
      <div className={styles.content}>
          <Room />
          { mainPopupState === 1 && <Education /> }    
      </div>
    )
}
