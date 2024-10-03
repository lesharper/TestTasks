import styles from './LinkCard.module.css'
import { IImage, ILink } from '@/shared/types'
import Image from 'next/image'
import Link from 'next/link'

interface ILinkCard {
    icon: IImage

    title: string
    detail: string
    link: ILink
    linkIcon?: IImage
}

/** Карточка с ссылкой */

export const LinkCard = ({ icon, title, detail, link, linkIcon }: ILinkCard) => {
    return (
        <section className={styles.card}>
            <section className={styles.info}>
                <figure className={styles.icon}>
                    <Image {...icon} />
                </figure>

                <section>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.detail}>{detail}</p>
                </section>
            </section>

            {linkIcon && (
                <Link href={link.href}>
                    <Image {...linkIcon} />
                </Link>
            )}
        </section>
    )
}
