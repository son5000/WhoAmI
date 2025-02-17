import styles from "@/components/Talk/Theme_button.module.css"
import { useTheme } from "@/lib/ThemeContext";
import { useState } from "react"

export function ThemeButton () {

    const { theme , setTheme } = useTheme();

    function changeTheme () {
        return active ? setTheme('light') : setTheme('dark');
    }

    const [ active, setActive ] = useState(false);

    function handleClick  () {
        setActive(!active);
        changeTheme();
    }

    console.log(active,theme);

    return (
            <div className={styles.themeButton}>
                <button
                    className={active ? styles.active : ""}  
                    onClick={() => handleClick()}>
                    Thema
                </button>
            </div>
    )
}