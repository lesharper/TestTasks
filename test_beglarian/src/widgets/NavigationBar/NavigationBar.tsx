'use client'

import styles from './NavigationBar.module.css'
import { MOCK_NAVIGATION_BAR } from '@/_mock'
import { NavigationItem } from '@/features/NavigationItem'

export const NavigationBar = () => {
    const renderNavigation = MOCK_NAVIGATION_BAR.map(item => <NavigationItem {...item} />)

    return <article className={styles.container}>{renderNavigation}</article>
}
