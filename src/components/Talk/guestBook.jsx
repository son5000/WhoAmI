import styles from "@/components/Talk/guestBook.module.css"


export function GuestBook () {

    return (
        <div className={styles.container}>
            <div>
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
                <TextBox />
            </div>
            <form>
                <textarea type="text" placeholder="메세지 입력" />
            </form>
        </div>
    )
}

export function TextBox () {

    return (
        <div className={styles.textBox}>
            <span>
                작성자 아이콘
            </span>
            <div>
                <p>작성자</p>
                <div className={styles.speechBubble}>안녕하세요들송송계란탁재훈입니다람쥐렁이발소</div>
                <span>작성날짜</span>
            </div>
        </div>
    )
}
