import styles from './IconInfoCardsGroup.module.css'
import { MOCK_ICON_INFO_CARDS } from '@/_mock'
import { IconInfoCard } from '@/shared/ui/IconInfoCard'

export const IconInfoCardsGroup = () => {
    const renderCards = MOCK_ICON_INFO_CARDS.map((icon, index) => (
        <IconInfoCard
            key={index}
            {...icon}
        />
    ))

    return <article className={styles.cards}>{renderCards}</article>
}
