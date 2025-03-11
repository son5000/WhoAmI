import styles from "@/components/Section/content.module.css"
import { Room } from "./room"

export function Content () {

    return (
      <div className={styles.content}>
          <Room />
          <p>2025-03 Who Am I v1.0.0 All icons by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a></p>
      </div>
    )
}
