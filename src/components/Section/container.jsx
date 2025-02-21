import styles from '@/components/Section/container.module.css'
import { Content } from './content'
import { TalkContainer } from '../Talk/container'
import { useTalkState } from '@/lib/TalkStateContext'


export function Container () {

    const { talkState } = useTalkState();

    return(
        <div className={styles.container}>
            { talkState &&
                <TalkContainer className="author" />
            }
            <Content className="content" />
        </div>
    )
}