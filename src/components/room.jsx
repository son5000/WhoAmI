import styles from "@/components/room.module.css"
import { Basket } from "./basket"
import { useState } from "react"

export function Room () {
  const [window, setWindow] = useState(false);
  const [bad, setbad] = useState(false);

  function clickBad () {
    if(window){
      setWindow(false);
    }
    return setbad(!bad)
  }

  function clickWindow () {
    if(bad){
      setbad(false)
    }
    setWindow(!window);
  }

    return (
      <div className={styles.container}>
          <div className={styles.cube}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.bottom}></div>
          </div>{
            !bad && !window && (
            <div className={styles.character}>
              <span className={styles.head}>머리</span>
              <span className={styles.leftHand}>왼쪽팔</span>
              <span className={styles.body}>몸통</span>
              <span className={styles.rightHand}>오른쪽팔</span>
              <span className={styles.leftLeg}>왼쪽다리</span>
              <span className={styles.rightLeg}>오른쪽다리</span>
            </div> )
          }
          <span className={styles.icon}>icon</span>
          <img className={styles.chair} src="images/Section/의자.png" art="의자 이미지" />
          <img className={styles.hanger} src="/images/Section/hanger.png" alt="옷걸이 이미지" />
          <img 
            onClick={() => clickBad()}
            className={bad ? styles.badActive : styles.bad} 
            src={bad ? "/images/Section/침대2.png" : "/images/Section/침대.png"} 
            alt="침대 이미지" />
          {/* <img className={styles.bad} src="/images/Section/싱크대.png" alt="싱크대 이미지" /> */}
          <img className={styles.desk} src="/images/Section/책상.png" alt="책상 이미지" />
          <img className={styles.computer} src="/images/Section/컴퓨터.png" alt="컴퓨터 이미지" />
          {}
          <img 
            onClick={ () => clickWindow()}
            className={window ? styles.windowActive : styles.window} 
            src={window ? "/images/Section/창문2.png" : "/images/Section/창문1.png"}
            alt="창문 이미지" />
          <Basket />
      </div>
    )
}