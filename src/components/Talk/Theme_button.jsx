import styles from "@/components/Talk/Theme_button.module.css"
import { useTheme } from "@/lib/ThemeContext";
import { useState } from "react"

export function ThemeButton () {

    const { theme , setTheme } = useTheme();
    
    const handleChangeTheme = () => {
        if(theme === 'light'){
             setTheme('dark');
        }else{
             setTheme('light')
        }
    }
    return (
            <div className={styles.themeButton}>
                <button
                    onClick={() => handleChangeTheme()}
                    className={theme === "dark" ? styles.active : "" }  
                    >
                    Theme
                </button>
            </div>
    )
}