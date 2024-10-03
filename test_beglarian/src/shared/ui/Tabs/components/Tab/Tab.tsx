import styles from './Tab.module.css'
import { getClassName } from '@/shared/lib'

interface ITab {
    value: string
    isCurrent?: boolean
    onClick: () => void
}

export const Tab = ({ value, onClick, isCurrent = false }: ITab) => {
    return (
        <section
            onClick={onClick}
            className={getClassName(styles.tab, isCurrent && styles.isActive)}
        >
            {value}
        </section>
    )
}
