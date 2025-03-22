import styles from '@/components/Section/container.module.css'
import { Content } from './content'
import { TalkContainer } from '../Talk/container'
import { useTalkState } from '@/lib/TalkStateContext'
import { useEffect, useState } from 'react'


const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export function Container () {

  const [currentWindowWidth, setCurrentWindowWidth] = useState(null);
  const { talkState, setTalkState } = useTalkState();

  const handleResize = debounce(() => {
    setCurrentWindowWidth(window.innerWidth);
  }, 300); 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize(); 

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (currentWindowWidth !== null && currentWindowWidth < 600 && !talkState) {
      setTalkState(true);
    }
  }, [currentWindowWidth, talkState, setTalkState]);

  if (currentWindowWidth === null) {
    return null; 
  }

  return (
    <div className={styles.container}>
      { talkState &&
        <TalkContainer className="author" />
      }
      <Content className="content" />
    </div>
  );
}
