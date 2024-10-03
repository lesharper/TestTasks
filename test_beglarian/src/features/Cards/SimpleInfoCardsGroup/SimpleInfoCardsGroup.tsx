import styles from './SimpleInfoCardsGroup.module.css'
import { MOCK_SIMPLE_INFO_CARDS } from '@/_mock'
import { SimpleInfoCard } from '@/features/Cards/SimpleInfoCardsGroup/components'

export const SimpleInfoCardsGroup = () => {
    const renderCards = MOCK_SIMPLE_INFO_CARDS.map((card, index) => (
        <SimpleInfoCard
            key={index}
            {...card}
            className={styles.item}
        />
    ))

    return <article className={styles.cards}>{renderCards}</article>
}
