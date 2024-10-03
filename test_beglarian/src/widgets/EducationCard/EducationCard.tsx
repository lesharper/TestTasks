import { CardWithBorder } from '@/shared/ui/CardWithBorder/CardWithBorder'
import styles from './EducationCard.module.css'
import { ProgressBar } from '@/features/Course/ProgressBar/ProgressBar'
import { LinkCard } from '@/features/Cards/LinkCard'
import icon_graduation_cap from '@/../public/icons/graduation-cap.svg'
import icon_arrow_button from '@/../public/icons/arrow-button.svg'
import { ROUTES } from '@/shared/constants'

export const EducationCard = () => {
    return (
        <CardWithBorder className={styles.card}>
            <LinkCard
                icon={icon_graduation_cap}
                title="Learning"
                detail="Category В"
                link={{ href: ROUTES.LEARNING }}
                linkIcon={icon_arrow_button}
            />
            <ProgressBar />
        </CardWithBorder>
    )
}
