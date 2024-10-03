'use client'

import styles from './NumberCellGroup.module.css'

import { NumberCell } from '@/features/Course/NumberCell/NumberCell'
import { useSessionStorage } from 'usehooks-ts'
import { IQuestion, TId } from '@/shared/types'
import questionsMock from '@/_mock/questions.json'
import { QUESTIONS_KEY, COMPLETED_QUESTIONS_KEY } from '@/shared/constants'
import { useEffect } from 'react'

export const NumberCellGroup = () => {
    const [questions, setQuestions] = useSessionStorage<IQuestion[]>(QUESTIONS_KEY, questionsMock)
    const [completedQuestions, setCompletedQuestions] = useSessionStorage<number>(
        COMPLETED_QUESTIONS_KEY,
        0,
    )

    const handleComplete = (id: TId) => {
        setQuestions(prevQuestions =>
            prevQuestions.map(question =>
                question.id === id ? { ...question, complete: !question.complete } : question,
            ),
        )
    }

    useEffect(() => {
        setCompletedQuestions(questions.filter(question => question.complete).length)
    }, [questions])

    const renderCells = questions.map((item, index) => (
        <NumberCell
            value={item}
            cellKey={(index + 1).toString()}
            onClick={() => handleComplete(item.id)}
        />
    ))

    return <article className={styles.group}>{renderCells}</article>
}
