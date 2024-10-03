import { NumberCellGroup } from '@/features/Course/NumberCellGroup/NumberCellGroup'
import styles from './LearningPage.module.css'
import { Tabs } from '@/shared/ui/Tabs/Tabs'

export default function LearningPage() {
    return (
        <main className={styles.page}>
            <Tabs values={['Tests']} />
            <NumberCellGroup />
        </main>
    )
}
