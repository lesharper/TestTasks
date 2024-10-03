import check_icon from '@/../public/icons/check-circle.svg'
import Image from 'next/image'
import { PropsWithClassName } from '@/shared/types'
import { getClassName } from '@/shared/lib'
import styles from './IconCheckMark.module.css'

export const IconCheckMark = ({ className }: PropsWithClassName) => {
    return (
        <section className={getClassName(className)}>
            <Image
                src={check_icon}
                alt="check_mark"
                className={styles.mark_image}
            />
        </section>
    )
}
