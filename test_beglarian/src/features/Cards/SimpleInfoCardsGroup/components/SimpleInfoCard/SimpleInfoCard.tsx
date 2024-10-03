import styles from './SimpleInfoCard.module.css'
import { IImage, PropsWithClassName } from '@/shared/types'
import Image from 'next/image'
import { getClassName } from '@/shared/lib'
import { ISimpleInfoCard } from '@/features/Cards/SimpleInfoCardsGroup/components/SimpleInfoCard/types'
import { CardWithBorder } from '@/shared/ui/CardWithBorder/CardWithBorder'

export const SimpleInfoCard = ({
    text,
    icon,
    iconColor,
    className,
}: PropsWithClassName<ISimpleInfoCard>) => {
    return (
        <CardWithBorder className={getClassName(styles.card, className)}>
            <figure className={getClassName(styles.icon, styles[iconColor])}>
                <Image {...icon} />
            </figure>

            <p className={styles.card_text}>{text}</p>
        </CardWithBorder>
    )
}
