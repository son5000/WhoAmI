import styles from "@/components/Section/character.module.css"

export function Character ({handleCharacter,hanger,character,bad,window,soccer}) {
    return (
        <>  
            {!hanger && <span className={styles.speechBubble}>
                    <p className={styles.typeWriter}></p>
            </span>}
            <div onClick={() => handleCharacter()}
                className={ hanger ? [styles.character, styles.active].join(' ') : 
                    ( character ? [styles.character, styles.charCenter].join(' ') : styles.character)}>
                    <span className={styles.head}>머리</span>
                    <span className={styles.leftHand}>왼쪽팔</span>
                    <span className={styles.body}>몸통</span>
                    <span className={styles.rightHand}>오른쪽팔</span>
                    <span className={styles.leftLeg}>왼쪽다리</span>
                    <span className={styles.rightLeg}>오른쪽다리</span>
            </div>
            { !bad && !window && !hanger && character && 
              <TripleCharacter handleCharacter={handleCharacter} 
            />}
        </>
    )
}

export function TripleCharacter ({handleCharacter}) {

    return (
        <>
            <div onClick={() => handleCharacter()}
                 className={ [styles.character, styles.charLeft].join(' ')}>
              <span className={styles.head}>머리</span>
              <span className={styles.leftHand}>왼쪽팔</span>
              <span className={styles.body}>몸통</span>
              <span className={styles.rightHand}>오른쪽팔</span>
              <span className={styles.leftLeg}>왼쪽다리</span>
              <span className={styles.rightLeg}>오른쪽다리</span>
            </div>
            <div onClick={() => handleCharacter()}
                 className={[styles.character, styles.charRight].join(' ')}>
              <span className={styles.head}>머리</span>
              <span className={styles.leftHand}>왼쪽팔</span>
              <span className={styles.body}>몸통</span>
              <span className={styles.rightHand}>오른쪽팔</span>
              <span className={styles.leftLeg}>왼쪽다리</span>
              <span className={styles.rightLeg}>오른쪽다리</span>
            </div>
        </>
    )
}

export function ShootCharacter () {

    return (
        <>
            <div 
                 className={ [styles.ShootCharacter].join(' ')}>
              <span className={styles.head}>머리</span>
              <span className={styles.leftHand}>왼쪽팔</span>
              <span className={styles.body}>몸통</span>
              <span className={styles.rightHand}>오른쪽팔</span>
              <span className={styles.leftLeg}>왼쪽다리</span>
              <span className={styles.rightLeg}>오른쪽다리</span>
            </div>
        </>
    )
}