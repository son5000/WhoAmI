import styles from "@/components/Section/content.module.css"
import { Room } from "./room"

export function Content () {

    return (
      <div className={styles.content}>
          <Room />
      </div>
    )
}
