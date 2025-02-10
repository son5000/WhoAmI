import styles from "@/components/content.module.css"
import { Basket } from "./basket"


export function Content () {


    return (
      <div className={styles.content}>
          <Basket />
      </div>
    )
}
