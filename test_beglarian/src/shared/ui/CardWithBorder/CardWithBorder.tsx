import { PropsWithChildren } from 'react'
import { PropsWithClassName } from '@/shared/types'
import { getClassName } from '@/shared/lib'
import styles from './CardWithBorder.module.css'

export const CardWithBorder = ({ className, children }: PropsWithChildren<PropsWithClassName>) => {
    return <article className={getClassName(styles.card, className)}>{children}</article>
}
