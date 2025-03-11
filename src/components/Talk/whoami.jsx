import styles from "@/components/Talk/project.module.css"
import Link from "next/link"

export function WhoAmI () {
    return (
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <p>✅ Who Am I</p>
                    <div>
                        <Link href={'/'}>Project Link</Link>
                        <Link href={'/'}>Github</Link>
                    </div>
                    <span>
                        <b>Who Am I</b>는 Next.js를 기반으로 만들어진 저의 개인 PR 사이트 입니다.<br />
                        <b>'카카오톡'</b>을 모티브로한 메신저 요소와 <b>소소한 애니메이션</b>을 담고 있는 <b>'Room'</b> 요소가 주된 컨텐츠 입니다.
                    </span>
                    <ul>
                        <li>
                            프로젝트 기여도
                            <ul>
                                <li>
                                    <p><b>100% 기여</b>: 프로젝트의 기획, 개발, 배포까지 모든 과정에서 단독으로 진행하였습니다.</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            주요기능
                            <ul>
                                <li>
                                    1. <b>반응형 웹 서비스</b>
                                    <p>테블릿 및 모바일 환경에서 사용자의 편리한 접근을 위한 반응형 디자인을 적용했습니다.</p>
                                </li>
                                <li>
                                    2. <b>Light / Dark 테마 변경</b>
                                    <p>Context API와 Next.js의 CSS :global 선택자를 활용하여 사용자가 선택한 테마에 맞춰 라이트 모드와 다크 모드를 지원하는 기능을 구현했습니다.</p> 
                                    <p>애니메이션 요소와 연계하여 테마에 따라 다른 애니메이션을 보여주는 기능을 추가했습니다.</p>
                                </li>
                                <li>
                                    3. <b>방명록 서비스</b>
                                    <p>방문한 유저가 방명록을 남길 수 있는 GuestBook 서비스를 만들었습니다</p>
                                    <p>방명록 데이터는 실시간으로 반영되도록 구현했습니다.</p> 
                                    <p>작성자의 이름 또는 별명을 입력받고, 작성 시간과 날짜, 내용을 함께 저장합니다.</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            기술 스택
                            <ul>
                                <li>
                                    <p>
                                        <b>React</b> : 컴포넌트 기반으로  UI 구성
                                    </p>
                                    <p>
                                        <b>Context API</b> : 테마 상태 관리
                                    </p>
                                    <p>
                                        <b>MongoDB</b> : 방명록 데이터 저장
                                    </p>
                                    <p>
                                        <b>Mongoose</b> : MongoDB와의 연결 및 스키마 관리
                                    </p>
                                    <p>
                                        <b>CSS Modules</b> : 컴포넌트 기반 스타일링
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            배포
                            <ul>
                                <li>
                                    <p><b>Vercel</b></p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            프로젝트 구체적 내용
                            <ul>
                                <li>
                                <p>
                                    본 서비스는 크게 두 개의 컴포넌트로 구성되어 있습니다. <br /> 'Kakao Talk'에서 영감을 받아 만든 'Talk' 컴포넌트와 실제 유저의 바탕화면을 반영하는 'Section' 컴포넌트로 나뉩니다.
                                </p>
                                <p>
                                    'Talk' 컴포넌트는 'TalkNav'와 'TalkContent'로 나뉘어 구성됩니다.<br /> 'TalkNav'의 구성 요소로는 'Profile', 'GuestBook', 소셜 미디어 링크가 있으며, 탭 메뉴 형식으로 유저의 마우스 이벤트를 기반으로 작동합니다. 
                                    'TalkContent' 컴포넌트는 프로젝트에서 다루고자 하는 주요 팝업 메인 요소들을 자식 요소로 가지고 있습니다.
                                </p>
                                <p>
                                    CSS는 'CSS Modules' 방식을 사용하여 컴포넌트별로 CSS 파일을 따로 작성했습니다.<br /> 이는 컴포넌트를 더 세밀하게 모듈화하여 관리하기 위해 선택한 방법입니다. 이 방식을 택한 이유는, 초기 디자인의 모티브로 삼은 실제 유저들의 데스크탑 바탕화면을 구현하고 싶었기 때문입니다. 각각의 요소를 애플리케이션화 시켜 분리하여 독립적으로 실행되고 작동하는 프로그램처럼 관리하는 것이 프로젝트의 초기 설계와 잘 맞아떨어진다고 생각했습니다. 
                                    이 과정에서 반응형 작업을 진행할 때 컴포넌트별로 구분해서 'media query'를 작성해야 했기에 다소 불편함이 있었지만, 잘 다듬어진 모듈은 향후 유지보수 시 큰 장점이 될 것이라고 생각하며 진행했습니다.
                                </p>
                                <p>
                                    'Room' 컴포넌트를 구성하여 바탕화면에 과거 '싸이월드'에서 영감을 받은 '미니홈피'의 모습을 구현했습니다. <br />
                                    'Context API'를 사용하여 현재 테마의 상태값을 기반으로 동적으로 변화하는 애니메이션 요소와 'Talk' 컴포넌트의 활성화/비활성화 상태에 따라 다른 애니메이션 요소를 구현했습니다. 
                                    'CSS'로 만들어진 요소와 'Image' 파일을 연계하여 보다 인터랙티브한 느낌을 주도록 했습니다. 
                                    디자인 시안이 없이 저의 창의력만으로 구성했기 때문에 애니메이션 요소들의 UI 품질이 다소 떨어졌습니다. 
                                    하지만 평소 애니메이션에 흥미가 있었기에 재미있게 작업할 수 있었습니다.
                                </p>
                                <p>
                                    'GuestBook' 컴포넌트를 통해 유저는 방명록을 남길 수 있습니다. <br /> 컴포넌트 초기 렌더링 시 'useEffect' 함수를 사용하여 'API'를 호출해 'db'를 조회하고, 배열 형태로 이전에 작성된 방명록들을 불러옵니다. 
                                    유저가 새로운 방명록을 작성하면 'API'를 호출하여 'useState'로 만든 작성자, 본문을 담고 있는 객체를 전달합니다. 
                                    전달한 값을 토대로 'db'에 최신값을 업데이트한 후, 다시 'useEffect' 함수를 호출하여 방명록의 요소를 반영합니다.
                                    방명록은 유저의 편의성을 위해 'container'의 'scroll' 값을 'useRef'를 사용해 항상 최신의 방명록을 보여주도록 구성했습니다. 또한 유저가 'Enter' 키로 메시지를 전송할 수 있도록 이벤트 핸들러를 등록했습니다.
                                </p>
                                <p>
                                    민감한 변수(예: 'db 주소')는 ENV 파일을 활용해 루트 경로에서 관리했습니다.
                                </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={styles.imgBox}>
                    <img src="/images/Talk/whoami-1.png" alt="" />
                    <img src="/images/Talk/whoami-6.png" alt="" />
                    <img src="/images/Talk/whoami-3.png" alt="" />
                    <img src="/images/Talk/whoami-4.png" alt="" />
                    <img src="/images/Talk/whoami-2.png" alt="" />
                    <img src="/images/Talk/whoami-5.png" alt="" />
                </div>
            </div>  
    )
}