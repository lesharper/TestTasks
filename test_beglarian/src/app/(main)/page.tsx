import styles from './Main.module.css'
import { SimpleInfoCardsGroup } from '@/features/Cards/SimpleInfoCardsGroup/SimpleInfoCardsGroup'
import { IconInfoCardsGroup } from '@/features/Cards/IconInfoCardsGroup/IconInfoCardsGroup'
import { EducationCard } from '@/widgets/EducationCard'
import { NavigationBar } from '@/widgets/NavigationBar'

export default function Main() {
    return (
        <main className={styles.page}>
            <section className={styles.information}>
                <EducationCard />
                <SimpleInfoCardsGroup />
                <IconInfoCardsGroup />
            </section>

            <NavigationBar />
        </main>
    )
}
