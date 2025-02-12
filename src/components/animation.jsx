import styles from "@/components/animation.module.css"

export  function Animation () {
    return  (   <>  
                    <span className={styles.head}>머리</span>
                    <span className={styles.leftHand}>왼쪽팔</span>
                    <span className={styles.rightHand}>오른쪽팔</span>
                    <span className={styles.body}>몸통</span>
                    <span className={styles.leftLeg}>왼쪽다리</span>
                    <span className={styles.rightLeg}>오른쪽다리</span>
                    {/* <span className={styles.hanger}>옷걸이</span> */}
                    <img className={styles.hanger} src="/images/Section/hanger.png" alt="" />
                </>
    )
}