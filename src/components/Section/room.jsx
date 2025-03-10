import styles from "@/components/Section/room.module.css"
import { Basket } from "./basket"
import {  useEffect, useState } from "react"
import { useTheme } from "@/lib/ThemeContext";
import { useTalkState } from "@/lib/TalkStateContext";
import { SunAndMoon } from "./sunAndMoon";
import { Character, ShootCharacter} from "./character";
import { WallCharacter } from "./character";

export function Room () {
  
  const [window, setWindow] = useState(false);
  const [bad, setBad] = useState(false);
  const [hanger, setHanger] = useState(false);
  const [character, setCharacter] = useState(false);
  const { theme } = useTheme();
  const [soccer, setSoccer] = useState(false);
  const { talkState, setTalkState } = useTalkState();

  const windowSrc = () => {
    const baseSrc = 'images/Section/창문';
    const imageSuffix = window
      ? theme === 'light'
        ? '2.png'
        : '4.png'
      : theme === 'light'
      ? '1.png'
      : '3.png';

    return baseSrc + imageSuffix;
  }

  function handleClickTalkIcon () {
    return setTalkState(!talkState);
  }

  const iconAni  = () => {
    if( !talkState ){
      return {}
    }
    return {
      animation : 'bounce 2s infinite',
    }
  }

  function handleCharacter () {
    if(window || hanger || bad){
      setWindow(false);
      setHanger(false);
      setBad(false)
    }
    return setCharacter(!character)
  }

  function handleClickBad () {
    if(window || hanger || character || soccer){
      setWindow(false);
      setHanger(false);
      setCharacter(false);
      setSoccer(false);
    }
    return setBad(!bad)
  }

  function handleClickWindow () {
    if(bad || hanger || character || soccer){
      setBad(false);
      setHanger(false);
      setCharacter(false);
      setSoccer(false);
    }
    setWindow(!window);
  }

  function handleClickHanger () {
    if(bad || window || character || soccer){
      setBad(false);
      setWindow(false);
      setCharacter(false);
      setSoccer(false);
    }
    setHanger(!hanger);
  }

  function handleClickSoccer () {
    if(bad || window || character || hanger ){
      setBad(false);
      setWindow(false);
      setCharacter(false);
      setHanger(false);
    }
    setSoccer(!soccer)
  }

  useEffect (() => {
    if(soccer) {
      setTimeout(() => {
        setSoccer(false)
      }, 3000);
    }
  },[soccer])

    return (
      <div className={styles.container}>
        <SunAndMoon />
        <WallCharacter />
          <div className={styles.cube}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
            <div className={styles.bottom}></div>
          </div>
          {!bad && !window && !soccer &&  
            ( <Character 
                  handleCharacter={handleCharacter} 
                  hanger={hanger}
                  character={character}
                  window={window}
                  bad={bad}
                  soccer={soccer}
                  />
                )
          }
          <span
            style={iconAni()}
            onClick={() => handleClickTalkIcon()}
            className={theme == 'light' ? styles.icon : [styles.icon,styles.active].join(' ')}
            >TalkIcon</span>
          <img className={styles.chair} src="images/Section/의자.png" art="의자 이미지" />
          <img 
            onClick={() => handleClickHanger()}
            className={styles.hanger} 
            src={ hanger ? "/images/Section/hanger2.png" : "/images/Section/hanger.png" }
            alt="옷걸이 이미지" />
          <img 
            onClick={() => handleClickBad()}
            className={styles.bad} 
            src={bad ? "/images/Section/침대2.png" : "/images/Section/침대.png"} 
            alt="침대 이미지" />
          {/* <img className={styles.bad} src="/images/Section/싱크대.png" alt="싱크대 이미지" /> */}
          <img className={styles.desk} src="/images/Section/책상.png" alt="책상 이미지" />
          <img className={styles.computer} src="/images/Section/컴퓨터.png" alt="컴퓨터 이미지" />
          <img 
            onClick={ () => handleClickWindow()}
            className={styles.window} 
            src={ windowSrc()}
            alt="창문 이미지" /> 
          <Basket />
          <span
             onClick={() => handleClickSoccer()}
             className={soccer ? [styles.soccerBall, styles.shoot].join(' ') : styles.soccerBall }>
          </span>
          {soccer && <ShootCharacter /> }
      </div>
    )
}

