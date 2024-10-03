import styles from './BackLink.module.css'
import Link from 'next/link'
import { IconThinArrow } from '@/shared/ui/IconThinArrow/IconThinArrow'
import { ILink } from '@/shared/types'

export const BackLink = ({ text, href }: ILink) => {
    return (
        <Link
            href={href}
            className={styles.link}
        >
            <IconThinArrow />
            {text && <p>{text}</p>}
        </Link>
    )
}
