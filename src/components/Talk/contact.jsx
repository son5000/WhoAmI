import styles from "@/components/Talk/contact.module.css"
import { useState } from "react";
import { useTheme } from "@/lib/ThemeContext"

export function Contact () {

    const [copied, setCopied] = useState(false); // 복사 여부 상태 관리
    const {theme} = useTheme();

    return (
        <div className={styles.container}>
            {/* <p>✅ Contact</p> */}
            {copied && <p>이메일 주소가 복사되었습니다!✅</p>}
            <ul>
                <li>
                    <img src={theme === "light" ? "/images/Talk/이메일-검.png" : "/images/Talk/이메일-흰.png"}
                         alt="" 
                    />
                    <div>
                        <strong>E-MAIL</strong>
                        <CopyEamil copied={copied} setCopied={setCopied} />
                    </div>
                </li>
                <li>
                    <img src={theme === "light" ? "/images/Talk/전화-검.png" : "/images/Talk/전화-흰.png"}
                         alt="" 
                    />
                    <div>
                        <strong>TEL</strong>
                        <p>+82:010-9948-8717</p>
                    </div>
                </li>
                <li>
                    <img src={theme === "light" ? "/images/Talk/깃허브-검.png" : "/images/Talk/깃허브-흰.png"}
                         alt="" 
                    />
                    <div>
                        <strong>GITHUB</strong>
                        <p><a target="_blank" href="https://github.com/son5000">github.com/son5000</a></p>
                    </div>
                </li>
                <li>
                    <img src={theme === "light" ? "/images/Talk/노션-검.png" : "/images/Talk/노션-흰.png"}
                         alt="" 
                    />
                    <div>
                        <strong>NOTION</strong>
                        <p><a target="_blank" href="https://great-debt-2b0.notion.site/Note-10ab853ac11a80169754e0272445fae7?pvs=4">Notion.link</a></p>
                    </div>
                </li>
                <li>
                    <img src={theme === "light" ? "/images/Talk/인스타-검.png" : "/images/Talk/인스타-흰.png"}
                         alt="" 
                    />
                    <div>
                        <strong>INSTA</strong>
                        <p><a target="_blank"  href="https://www.instagram.com/sxnlikecoye_?igsh=OGhmMnBhZWpmZGRy&utm_source=qr">Insta.link</a></p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export function CopyEamil ({copied, setCopied}) {

    const email = "sonhanje@kakao.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true); // 복사 성공 시 copied 상태 true로 설정
                setTimeout(() => setCopied(false), 2000); // 3초 후 복사 메시지 숨기기
            })
            .catch(err => {
                console.error('Failed to copy text:', err);
            });
    };

    return (
        <p onClick={copyEmail}>
            sonhanje@kakao.com  
        </p>
    )
}