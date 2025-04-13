import { useState, useEffect } from "react";
import Modal from "react-modal"
import styles from "@/components/Section/folder.module.css"
import { useTalkState } from "@/lib/TalkStateContext";
import { useFolderState } from "@/lib/FolderStateContext";


export function Folder () {
    const { folderState, setFolderState } = useFolderState();
    const { talkState } = useTalkState();

    function handlePopupOpen ()  {
        return setFolderState(!folderState)
    }
    
    useEffect(() => {
      Modal.setAppElement('#__next');
    }, []);
    
      return (
        <div className={styles.container}>
            {folderState && 
            <div className={styles.inner}
                style={{
                    left: talkState ? "59%" : "50%",
                }}
                >
                <div className={styles.header}>
                    <p>project</p>
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
                            <span>생성 날짜</span>
                            <span>유형</span>
                        </p>
                        <ul>
                            <li>
                                <a href="" target="https://icutd.netlify.app/" rel="noopener noreferrer">
                                    <div>
                                        <img src="/images/Talk/인천.png" alt="" />
                                        인천유나이티드
                                    </div>
                                    <span>
                                        2025.01
                                    </span>
                                    <span>
                                        개인 프로젝트
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <div>
                                        <img src="/images/Section/icon_light.png" alt="" />
                                        WhoAmI
                                    </div>
                                    <span>
                                        2025.03
                                    </span>
                                    <span>
                                        개인 프로젝트
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="https://officialgamdong.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <div>
                                        <img src="/images/Talk/gamdong.png" alt="" />
                                        Gamdong
                                    </div>
                                    <span>
                                        2025.04
                                    </span>
                                    <span>
                                        개인 프로젝트
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            }
        </div>
      )
    }

    