import styles from "@/components/Section/education.module.css"
import { ContentLayOut } from "./contentBox"

export default function Education () {

    return (
        <ContentLayOut>
            <div className={styles.container}>
                <p>✅ Education</p>
                <ul>
                    <li>
                        1. 주요 학습 항목
                         <ul>
                            <li>
                                <b>2023년 10월 ~ 2024년 2월</b> : C언어를 통해 개발 기초 학습 시작, 알고리즘 문제 풀이
                                <p>학습 플랫폼: 도서, Code Up 알고리즘 문제</p>
                            </li>
                            <li>
                                <b>2024년 3월 ~ 2024년 8월</b> : JavaScript, CSS, HTML, jQuery 등 웹 개발자의 기초 학습
                                <p>학습 플랫폼: SBS 컴퓨터 아카데미 웹 퍼블리셔 과정</p>
                            </li>
                            <li>
                                <b>2024년 4월 ~ 2024년 10월</b> : JavaScript 심화 과정, React, Node.js 프레임워크의 기초 지식과 CSR 렌더링 방식, 백엔드 개발의 기초 학습
                                <p>학습 플랫폼: CodeIt (인터넷 강의)</p>
                            </li>
                                <li>
                                    <b>2024년 10월 ~ 현재</b> : 프로젝트를 직접 진행해보며 API를 사용한 DB 연결과 AWS를 통한 배포 과정 학습
                                    <p>학습 플랫폼: CodeIt (인터넷 강의), YouTube AWS 강의</p>
                                </li>
                                <li>
                                    <b>2025년 1월 ~ 현재</b> : Next.js를 통한 SSR 렌더링 방식 학습
                                    <p>학습 플랫폼: CodeIt</p>
                                </li>
                         </ul>
                    </li>
                    <li>
                        2. 학습한 기술 및 언어
                        <ul>
                            <li>
                                <b>프로그래밍 언어</b> : C, JavaScript
                            </li>
                            <li>
                                <b>웹 개발 기술:</b> : HTML, CSS, React, Node.js, Express, Next.js, jQuery
                            </li>
                            <li>
                                <b>데이터베이스</b> : PostgreSQL &lt;-&gt; Prisma, MongoDB &lt;-&gt; Mongoose
                            </li>
                            <li>
                                <b>기타</b> : Git, AWS
                            </li>
                        </ul>
                    </li>
                    <li>
                        3. 자격증 
                        <ul>
                            <li>
                                <b>2025년 3월</b> : SQLD
                            </li>
                            <li>
                                <b>2025년 4월</b> : 정보처리 산업 기사
                            </li>
                        </ul>
                    </li>
                    <li>
                        4. 현재의 위치와 미래 목표
                        <ul>
                            <li>
                                <b>현재</b> : Next.js 학습에 집중하고 있으며, 서버 사이드 렌더링(SSR)을 사용한 프로젝트 개발을 진행 중입니다.
                            </li>
                            <li>
                                <b>미래 목표</b> : 
                                <p><b>가까운 목표</b> : Next.js를 활용한 프로젝트 배포 후 TypeScript를 학습하고, 학습한 내용을 바탕으로 프로젝트를 진행할 계획입니다.</p>
                                <p><b>장기 목표</b> : 어플리케이션 개발에도 관심이 있으며, Flutter, Swift 등 어플리케이션 개발 언어를 학습하고 개발까지 도전하고자 합니다.</p>
                            </li>
                        </ul>
                    </li>
                </ul>
                </div>
        </ContentLayOut>
    )
}