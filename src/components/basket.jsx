import { useState, useEffect } from "react";
import Modal from "react-modal"
import styles from "@/components/basket.module.css"

export function Basket () {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    
    useEffect(() => {
      Modal.setAppElement('#__next');
    }, []);
    
      return (
        <div className={styles.container}>
            <span onClick={openModal}>휴지통</span>
            <div>
                <Modal
                  isOpen={isModalOpen}  // 모달이 열려있는지 확인
                  onRequestClose={closeModal}  // 모달을 닫을 함수
                  contentLabel="modal" // 접근성용 레이블
                  ariaHideApp={false}  // 접근성 관련 설정
                  className={styles.inner}
                  overlayClassName={styles.overlay}
                >
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p>
                                 휴지통
                            </p>
                            <div className={styles.windowButtons}>
                                <button>최소화</button>
                                <button>최대화</button>
                                <button onClick={closeModal}>닫기</button>
                            </div>
                        </div>
                        <p><mark>파일</mark></p>
                        <div className={styles.section}>
                            <ul className={styles.list}>
                                <li>즐겨찾기</li>
                                <li>oneDrive - personal</li>
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
                </Modal>
            </div>    
        </div>
      )
    }

    