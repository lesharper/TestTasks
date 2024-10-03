import styles from './NumberCell.module.css'
import { IQuestion } from '@/shared/types'
import { IconCheckMark } from '@/shared/ui/IconCheckMark/IconCheckMark'

interface INumberCell {
    value: IQuestion
    cellKey: string
    onClick: () => void
}

export const NumberCell = ({ value, cellKey, onClick }: INumberCell) => {
    return (
        <article
            className={styles.cell}
            onClick={onClick}
        >
            <p>{cellKey}</p>
            {value.complete && <IconCheckMark className={styles.icon} />}
        </article>
    )
}
