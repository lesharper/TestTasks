import styles from './IconInfoCard.module.css'
import Image from 'next/image'
import { IImage } from '@/shared/types'

export const IconInfoCard = (icon: IImage) => {
    return (
        <article className={styles.card}>
            <figure className={styles.card_image}>
                <Image {...icon} />
            </figure>
            <p>{icon.title}</p>
        </article>
    )
}
