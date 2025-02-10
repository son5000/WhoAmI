import styles from '@/components/container.module.css'
import { Content } from './content'
import { TalkContainer } from './Talk/Talk_container'


export function Container () {
    return(
        <div className={styles.container}>
            <TalkContainer className="author" />
            <Content className="content" />
        </div>
    )
}