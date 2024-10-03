import { PropsWithChildren } from 'react'
import { Header } from '@/widgets/Header/Header'
import styles from './Main.module.css'

export default function MainLayout({ children }: PropsWithChildren) {
    return (
        <main className={styles.layout}>
            <Header />
            {children}
        </main>
    )
}
