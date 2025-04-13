import { useState, useEffect } from "react";
import Modal from "react-modal"
import styles from "@/components/Section/basket.module.css"
import { useTalkState } from "@/lib/TalkStateContext";
import { useBasketState } from "@/lib/BasketStateContext";

export function Basket () {
    const { basketState, setBasketState } = useBasketState();
    const { talkState } = useTalkState();

    function handlePopupOpen ()  {
        return setBasketState(!basketState)
    }
    
    useEffect(() => {
      Modal.setAppElement('#__next');
    }, []);
    
      return (
        <div className={styles.container}>
            {/* <span onClick={handlePopupOpen}>휴지통</span> */}
            {basketState && 
            <div className={styles.inner}
                style={{
                    left: talkState ? "59%" : "50%",
                }}
                >
                <div className={styles.header}>
                    <p>휴지통</p>
                    <div className={styles.windowButtons}>
                        <button>최소화</button>
                        <button>최대화</button>
                        <button onClick={handlePopupOpen}>닫기</button>
                    </div>
                </div>
                <p><mark>파일</mark></p>
                <div className={styles.section}>
                    <ul className={styles.list}>
                        <li>즐겨찾기</li>
                        <li>oneDrive</li>
                        <li>내 PC</li>
                        <li>네트워크</li>
                        <li>Linux</li>
                    </ul>
                    <div className={styles.main}>
                        <p>
                            <span>이름</span>
                            <span>삭제된 날짜</span>
                            <span>유형</span>
                        </p>
                    </div>
                </div>
            </div>
            }
        </div>
      )
    }

    