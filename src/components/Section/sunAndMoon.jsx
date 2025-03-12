import { useState, useEffect } from "react"
import { useTheme } from "@/lib/ThemeContext"
import styles from "@/components/Section/sunAndMoon.module.css"

export function SunAndMoon () {
    const { theme, setTheme } = useTheme();
    const [ isMoved, setIsMoved ] = useState('firstMove');
    const [src, setSrc ] = useState('/images/Section/태양.png')

    const handleThemeChange = () => {
        if(theme === 'light'){
            setTheme('dark')
        }else{
            setTheme('light');
        }
    }

    useEffect(() => {         
        
            if (theme === 'light') { 
                setTimeout(() => {
                    setSrc('/images/Section/태양.png'); 
                },700);
                setIsMoved('move'); 
            } else {
                setTimeout(() => {
                    setSrc('/images/Section/달.png'); 
                }, 700);
                setIsMoved('reverse'); 
        }
      }, [theme]); 
      
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