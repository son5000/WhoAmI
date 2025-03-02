import styles from "@/components/Talk/contact.module.css"
import { useState } from "react";


export function Contact () {

    const [copied, setCopied] = useState(false); // 복사 여부 상태 관리

    return (
        <div className={styles.container}>
            <p>✅ Contact</p>
            <strong>저에게 연락하고 싶으신가요?💌<br /> 아래 방법을 통해 언제든지 연락해 주세요!</strong>
            <strong>Want to contact me? <br /> Please contact us anytime using the methods below!</strong>
            <ul>
                <li>
                    <p>E-mail</p>
                    <CopyEamil copied={copied} setCopied={setCopied} />
                    {copied && <p style={{ color: 'green', marginTop: '10px' }}>Email copied to clipboard!</p>}
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
        <button
                onClick={copyEmail}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    borderRadius: '5px',
                    marginTop: '10px',
                }}
            >
                Copy Email
            </button>
    )
}