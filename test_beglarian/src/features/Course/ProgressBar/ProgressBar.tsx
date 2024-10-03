'use client'

import { useSessionStorage } from 'usehooks-ts'
import { COMPLETED_QUESTIONS_KEY, QUESTIONS_KEY } from '@/shared/constants'
import { IQuestion } from '@/shared/types'
import questionsMock from '@/_mock/questions.json'
import styles from './ProgressBar.module.css'
import { getClassName } from '@/shared/lib'

/** Функция для вычисления кубиков */
const getProgressBarCubes = (percentageLimit: number) => {
    // Рендерим кубики
    const cubes = []

    for (let i = 0; i < 7; i++) {
        cubes.push(
            <div
                key={i}
                className={getClassName(
                    styles.cube,
                    i <= percentageLimit ? styles.complete : styles.default,
                )}
            />,
        )
    }

    return cubes
}

export const ProgressBar = () => {
    const [questions] = useSessionStorage<IQuestion[]>(QUESTIONS_KEY, questionsMock)
    const [completedQuestions] = useSessionStorage<number>(COMPLETED_QUESTIONS_KEY, 0)

    // Вычисляем процент выполнения и количество зеленых кубиков
    const percentage = Math.round((completedQuestions / questions.length) * 100)
    const percentageLimit = Math.round(percentage / 14.29) // 100% / 7 кубиков = 14.29% на кубик

    const isSuccessfully = completedQuestions == questions.length
    const statistic = isSuccessfully
        ? `The course has been completed`
        : `${completedQuestions} questions out of ${questions.length} passed`

    return (
        <article className={styles.container}>
            <p>{statistic}</p>
            <section className={styles.progressBar}>{getProgressBarCubes(percentageLimit)}</section>
        </article>
    )
}
