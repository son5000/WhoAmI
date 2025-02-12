import styles from "@/components/content.module.css"
import { Basket } from "@/components/basket"
import { Animation } from "@/components/animation"

export function Content () {


    return (
      <div className={styles.content}>
          <Basket />
          {/* <img src="/images/Section/hello-icon.png" alt="" /> */}
          {/* <span>I'm here!</span> */}
          <Animation />
      </div>
    )
}
