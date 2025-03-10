import styles from "@/components/Talk/project.module.css"
import Link from "next/link"

export function Icutd () {
    return (
            <div className={styles.container}>
                <div className={styles.textBox}>
                    <p>✅ Icutd</p>
                    <div>
                        <Link href={'/'}>Project Link</Link>
                        <Link href={'/'}>Github</Link>
                    </div>
                    <span>
                        기존 '<b>인천 유나이티드</b>' 공식 홈페이지를 리팩토링한 프로젝트입니다.<br />
                        <b>React</b> 기반의 프론트엔드와 <b>Express</b> 기반의 백엔드로 구성되었습니다.
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
                                    2. <b>로그인 서비스</b>
                                    <p>카카오 로그인 기능을 추가하여 소셜 로그인 지원합니다.</p>
                                    <p>JWT 기반 사용자 인증 시스템을 사용하여 로그인 및 인증 처리를 진행했습니다.</p>
                                    <p>Redis를 활용한 인증 정보 저장 및 보안 강화를 했습니다.</p>
                                </li>
                                <li>
                                    3. <b>게시판 서비스</b>
                                    <p>글 작성, 삭제 및 조회 기능을 제공합니다.</p>
                                    <p>사용자가 게시판에서 소통할 수 있도록 구현했습니다.</p>
                                    <p>RESTful API를 활용한 데이터 처리 및 관리를 했습니다.</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            기술 스택
                            <ul>
                                <li>
                                    1. 프론트엔드
                                    <p>
                                        <b>React</b> : 컴포넌트 기반으로  UI 구성
                                    </p>
                                    <p>
                                        <b>Redux</b> : 애플리케이션 로그인 상태 관리
                                    </p>
                                    <p>
                                        <b>React Router</b> : 페이지 간 라우팅 처리
                                    </p>
                                    <p>
                                        <b>RESTful API</b>
                                    </p>
                                </li>
                                <li>
                                    2. 백엔드
                                    <p>
                                        <b>Express</b> : 서버 및 API 구축
                                    </p>
                                    <p>
                                        <b>Prisma</b> : 데이터베이스 ORM으로, PostgreSQL과의 효율적인 데이터 연결 및 쿼리 작성
                                    </p>
                                    <p>
                                        <b>PostgreSQL</b> : 관계형 데이터베이스를 정의
                                    </p>
                                    <p>
                                        <b>Redis</b> : 세션 및 인증 정보 및 토큰 관리
                                    </p>
                                    <p>
                                        <b>JWT</b> : 사용자 인증 및 토큰 관리
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            배포
                            <ul>
                                <li>
                                    1. 프론트
                                    <p><b>netlify</b></p>
                                </li>
                                <li>
                                    2. 백엔드
                                    <p>
                                        <b>AWS</b> : 서버를 AWS EC2 인스턴스에 배포하여 안정적이고 확장 가능한 환경을 구축했습니다.
                                    </p>
                                    <p>
                                        <b>Nginx</b> : 리버스 프록시 방식으로 Nginx를 사용했습니다.
                                    </p>
                                    <p>
                                        <b>HTTPS</b> : SSL 인증서를 활용하여 HTTPS 환경에서 보안성을 강화했습니다.
                                    </p>
                                    <p>
                                        PM2를 사용하여 백엔드 서버의 프로세스를 관리하고, 
                                    </p>
                                    <p>
                                        서버 재시작 시 자동으로 애플리케이션이 실행되도록 설정했습니다.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            프로젝트 구체적 내용
                            <ul>
                                <li>
                                    프론트
                                    <p>
                                      본 서비스는 약 40개의 페이지로 구성되어 있습니다.코드의 재사용성과 유지보수를 고려하여, 페이지의 기본적인 틀은 상위 컴포넌트로 만들고, 하위 컴포넌트를 입히는 방식으로 구현했습니다.
                                    </p>
                                    <p>
                                      엔드포인트별로 약간 다른 UI가 반영되는 부분은 react-router-dom의 useLocation을 사용하였고,
                                      디바이스 환경에 따라 달라지는 UI는 Media Query를 적극 반영했습니다. 또한, 경우에 따라 resize 이벤트 핸들러를 등록하여 current width 값에 맞춰 렌더링을 진행했습니다.
                                    </p>
                                    <p>
                                      CSS 는 Sass/SCSS (네스팅 스타일) 을 사용해서 작성했으며 총 6개의 css 파일로 나누어 관리를 진행했습니다.내용은 다음과 같습니다.
                                        <span>global.css : 전역으로 사용되는 컴포넌트(header ,  footer …)들을 포함.</span>
                                        <span>page.css : 전역에 포함되지 않으며 각각의 페이지에서만 사용되는 컴포넌트들을 포함.</span>
                                        <span>reset.css : 전역으로 사용할 root 변수들과 css 모듈화를 포함하고 있습니다.</span>
                                        <span>components.css : page단위 안에서 더 작은 단위로 사용되며 중복으로 사용되는 컴포넌트들을 포함.</span>
                                        <span>import.css : 각각의 css 페이지들을 import 하고 어플리케이션을 직접 관통하는 css 파일.</span>
                                        <span>media1120.css : 미디어 쿼리로 반응형의 css 값을 가지고 있습니다.</span>
                                    </p>
                                    <p>
                                      애니메이션을 페이지별로 다르게 설정해야 하는 부분이 있었습니다. JSX 장점인 태그내에서의 변수 활용을 사용하여 CSS inline-style 로 각각의 다른 값을 할당해주기도 했습니다.
                                    </p>
                                    <p>
                                      이미지 파일과 mp3 파일등  assets는 public 경로를 활용해 직접 태그내에서 주소값을 참조 할 수 있도록 하였습니다. 
                                        <span>
                                        List 의 형식을 가지고 이미지를 복수로 전달해야 하는 경우에는 data.json 파일에서 값을 json형식으로 각각의 이미지를 가리키는 주소값을 배열로 만들어 import 한 후 변수에 담아 JSX 로 태그내에서 반복문을 사용해 렌더링을 진행 했습니다.
                                        </span>
                                    </p>
                                    <p>
                                      ENV 파일을 활용해 민감한 변수( 백엔드 주소, 카카오 REST_API_KEY… )들을 루트경로에서 관리했습니다.
                                    </p>
                                    <p>
                                      프로젝트에서는 로그인 서비스에 JWT를 사용하여 토큰 인증 방식을 적용해 보안성을 높히고, `Redux`와 `localStorage`를 활용하여 상태 관리를 진행하고 있습니다.
                                      최초 로그인 시, 서버에 유저의 아이디와 비밀번호를 통해 유효성 검사를 진행한 후, 성공적인 `Promise`를 받으면 `useDispatch()`를 사용하여 유저의 아이디 값을 저장합니다. 이후, 해당 값을 사용해야 하는 컴포넌트에서는 `useSelector`를 사용하여 값을 가져옵니다.
                                      또한, 새로고침 시 저장된 값이 휘발되지 않도록 최상위 컴포넌트에서 `accessToken`을 조회하여 값을 기억할 수 있게 구현했습니다.
                                    </p>
                                    <p>
                                      카카오 로그인 REST API를 사용하여 카카오 계정으로 로그인이 가능하게 만들었습니다.
                                      카카오 디벨로퍼에서 제 어플리케이션을 등록후 ‘앱 키’를 발급받아 해당 키를 적용하여카카오 API를 통해 인가 코드를 받았습니다. 이후 인가코드를 이용해 카카오`accessToken`
                                      `refreshToken`을 발급 받은후 받은 `accessToken` 으로 다시 API를 호출해 유저의 카카오 계정안의 ‘닉네임’ 값을 받아 저장했습니다. 이를 활용해 마찬가지로 UI 에 적용하며 Redux 를 활용해  App 내 전체에서 전역으로 사용할 수 있는 환경을 만들었습니다.
                                    </p>
                                </li>
                                <li>
                                    백엔드
                                    <p>
                                      프로젝트에서는 REST API를 효과적으로 활용하여, 클라이언트와 서버 간의 데이터 통신을 효율적으로 처리했습니다.
                                      각 기능에 맞는 HTTP 메서드(GET, POST, PUT, DELETE 등)를 적절히 사용하고, 리소스의 URI를 명확하게 설계하여 API의 가독성과 유지보수성을 높였습니다.
                                      또한, 응답의 상태 코드와 메시지를 적절하게 설정하여,
                                      클라이언트가 서버의 상태를 쉽게 이해할 수 있도록 했습니다.
                                    </p>
                                    <p>
                                      백엔드 서버에서는 `PostgreSQL`과 `Redis` 두 가지 DB를 사용하고 있습니다.
                                      두 가지를 사용하게 된 이유는 JWT를 활용했기 때문입니다. 보안 강도를 높이기 위해,
                                      그리고 로컬 스토리지의 값을 이용해 기능을 구현하면서 `accessToken`뿐만 아니라 `refreshToken`도 함께 사용했기 때문에,
                                      `refreshToken`을 저장하기 위한 휘발성의 특징과 빠른 데이터 처리가 가능한 인메모리 저장소인 `Redis`가 필요했습니다.
                                      로그인 시, 클라이언트에게 토큰을 생성해 넘겨주며, 동시에 `refreshToken`은 `Redis`에 특정 시간 동안 저장됩니다.
                                      이는 클라이언트 측에서 `accessToken`이 만료되었을 때, `refreshToken`을 활용해 새로운 토큰을 요청할 수 있도록 하여, 특정 토큰 값을 기억하기 위한 방식입니다.
                                    </p>
                                    <p>
                                      프로젝트에서 가장 신경 쓴 부분은 '보안'입니다.
                                      프론트 서버는 Netlify라는 서비스를 이용하여 https 환경으로 배포했습니다.
                                      백엔드 서버는 AWS의 EC2 모델을 사용하여 배포 과정을 진행했으며, Ubuntu 환경에 Nginx를 설치한 후,
                                      'Let's Encrypt' 서비스를 통해 SSL 인증서를 발급받아 https 환경으로 전환했습니다.
                                      이 과정에서 '가비아' 서비스를 통해 도메인을 구입하고, 'DNS' 설정에 적용했습니다.
                                      또한, 리버스 프록시를 사용하여 API를 직접 처리하지 않고 중계 역할을 맡게 했습니다. 'proxy-path'를
                                      통해 EC2의 로컬 환경에서 다른 포트를 사용하여 백엔드 서버에 요청을 전달하고, 응답을 받는 구조를 만들었습니다.
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={styles.imgBox}>
                    <img src="/images/Talk/icutd_page1.png" alt="" />
                    <img src="/images/Talk/icutd_page3.png" alt="" />
                    <img src="/images/Talk/icutd_page4.png" alt="" />
                    <img src="/images/Talk/icutd_page2.png" alt="" />
                    <img src="/images/Talk/icutd_page5.png" alt="" />
                    <img src="/images/Talk/icutd_page6.png" alt="" />
                </div>
            </div>  
    )
}