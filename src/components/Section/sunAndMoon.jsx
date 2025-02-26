import { useState, useEffect } from "react"
import { useTheme } from "@/lib/ThemeContext"
import styles from "@/components/Section/sunAndMoon.module.css"

export function SunAndMoon () {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light');
        }
    }

    const [ isMoved, setIsMoved ] = useState('firstMove');
    const [src, setSrc ] = useState('/images/Section/태양.png')
    
    useEffect(() => {         
        
            if (theme === 'light') { // 예시: theme이 'light'일 경우
                setTimeout(() => {
                    setSrc('/images/Section/태양.png'); // 태양 이미지
                },700);
                setIsMoved('move'); // 애니메이션: move
            } else {
                setTimeout(() => {
                    setSrc('/images/Section/달.png'); // 달 이미지
                }, 700);
                setIsMoved('reverse'); // 애니메이션: reverse
        }
      }, [theme]); // theme 값이 변경될 때마다 실행
      
      useEffect(() => {
          setIsMoved('firstMove'); 
      }, []); 

      return (
        <img
         onClick={() => handleThemeChange()}
         className={[styles.sunAndMoon, styles[isMoved]].join(' ')}
         src={src} 
         alt="" 
         />
    )
}