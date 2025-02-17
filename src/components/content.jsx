import styles from "@/components/content.module.css"
import { Basket } from "@/components/basket"
import { Room } from "./room"

export function Content () {


    return (
      <div className={styles.content}>
          {/* <Basket /> */}
          <Room />
      </div>
    )
}
