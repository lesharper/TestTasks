import { TId } from '@/shared/types/TId'

export interface IQuestion {
    id: TId
    question: string
    answer: string
    complete: boolean
}
