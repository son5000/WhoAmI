import styles from '@/components/Talk/project.module.css'

export function Gamdong() {
    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <p>✅ Gamdong</p>
                <div>
                    <a href={'https://officialgamdong.netlify.app'} target="_blank" rel="noopener noreferrer">Project Link</a>
                    <a href={'https://github.com/son5000/WhoAmI.git'} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <span>
                    <b>'Gamdong'</b>은 저의 반려견 <b>'감동이'</b>를 아티스트처럼 표현하여 소개하는 <br /> <b>HTML, CSS, jQuery</b>만을 사용해 제작한 간단한 웹 서비스입니다.
                </span>
                <ul>
                    <li>
                        프로젝트 기여도
                        <ul>
                            <li>
                                <p><b>100% 기여</b>: 기획, 개발, 디자인, 배포 등 모든 과정을 단독으로 진행했습니다.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        주요 기능
                        <ul>
                            <li>
                                1. <b>반응형 웹 서비스</b>
                                <p>태블릿 환경에서도 사용자가 편리하게 접근할 수 있도록 반응형 디자인을 적용했습니다.</p>
                            </li>
                            <li>
                                2. <b>퀴즈</b>
                                <p>jQuery를 사용해 만든 간단한 문제 풀이 서비스를 제공합니다.</p>
                                <p>사용자의 클릭 이벤트를 기반으로 점수를 매기고 기록하며, 최종 점수에 따라 다른 결과를 화면에 표시합니다.</p>
                            </li>
                            <li>
                                3. <b>같은 그림 찾기</b>
                                <p>jQuery를 사용하여 만든 게임 서비스입니다.</p>
                                <p>제한 시간을 설정하고, 사용자가 같은 그림 두 개를 모두 찾아내면 승리하는 게임입니다.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        기술 스택
                        <ul>
                            <li>
                                <p>
                                    <b>HTML</b>: 웹 페이지 구조 작성
                                </p>
                                <p>
                                    <b>CSS 네스팅</b>: SCSS나 SASS처럼 계층적인 스타일링을 적용하여 작성했습니다.
                                </p>
                                <p>
                                    <b>jQuery</b>: 사용자 인터랙션과 동적 요소 제어를 위해 사용했습니다.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        배포
                        <ul>
                            <li>
                                <p><b>Netlify</b></p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        프로젝트 상세 내용
                        <ul>
                            <li>
                                <p>
                                    본 서비스는 크게 네 개의 페이지로 구성되어 있습니다: 'Artist', 'Album', 'Quiz', 'Game'.
                                </p>
                                <p>
                                    'Index' 페이지는 네비게이션 역할을 하는 링크 리스트와 이미지 파일들로 구성되어 있습니다.
                                </p>
                                <p>
                                    'Artist' 페이지는 '감동이'의 프로필을 표현하는 페이지로, 각 항목을 글로벌 컴포넌트화하여 CSS 클래스명으로 정의해 사용했습니다.
                                </p>
                                <p>
                                    'Album' 페이지는 '감동이'의 일상 사진을 소개하는 페이지입니다. 'ul - li' 요소로 구성하고, 'flex-wrap' 속성으로 반응형 디자인을 적용했습니다.
                                </p>
                                <p>
                                    'Quiz' 페이지는 '감동이'에 대한 10개의 문제를 푸는 페이지입니다. 각 문제는 정답을 즉시 확인할 수 있으며, 정답과 오답에 따라 다른 결과를 화면에 표시합니다.
                                    <br />
                                    10문제를 모두 풀었을 때 채점 결과를 확인할 수 있고, 한 문제라도 정답 확인을 거치지 않으면 경고 메시지를 'alert'로 표시하고 풀지 않은 문제로 스크롤이 이동합니다.
                                </p>
                                <p>
                                    'Game' 페이지는 '감동이'의 사진을 활용한 같은 그림 찾기 게임을 제공합니다.
                                    <br />
                                    16개의 공간을 가진 배열을 렌더링하고, 그 안에 랜덤으로 같은 사진을 두 장씩 배치합니다. CSS 애니메이션을 사용하여 앞면과 뒷면을 컨트롤하며, 초기에는 1분 시간 제한이 설정되어 모든 카드가 10초 동안 공개됩니다. 이후 1분 동안 사용자는 같은 그림 짝을 모두 맞추어야 승리합니다.
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={styles.imgBox}>
                <img src="/images/Talk/감동이미리보기1.PNG" alt="페이지 미리보기 이미지" />
                <img src="/images/Talk/감동이미리보기2.PNG" alt="페이지 미리보기 이미지" />
                <img src="/images/Talk/감동이미리보기3.PNG" alt="페이지 미리보기 이미지" />
                <img src="/images/Talk/감동이미리보기4.PNG" alt="페이지 미리보기 이미지" />
                <img src="/images/Talk/감동이미리보기5.PNG" alt="페이지 미리보기 이미지" />
            </div>
        </div>
    );
}
