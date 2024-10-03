import { IImage } from '@/shared/types'
import styles from './InteractiveMiniature.module.css'
import Image from 'next/image'

interface IInteractiveMiniature {
    icon: IImage
    text?: string
}
export const InteractiveMiniature = ({ icon, text }: IInteractiveMiniature) => {
    return (
        <article className={styles.container}>
            <figure className={styles.image}>
                <Image {...icon} />
            </figure>

            {text && <p>{text}</p>}
        </article>
    )
}
