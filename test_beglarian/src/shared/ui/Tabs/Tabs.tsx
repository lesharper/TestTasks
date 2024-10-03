'use client'

import { Tab } from '@/shared/ui/Tabs/components'
import { useState } from 'react'
import styles from './Tabs.module.css'

interface ITabs {
    values: string[]
}
export const Tabs = ({ values }: ITabs) => {
    const [currentValue, setCurrentValue] = useState(values[0])

    const renderTabs = values.map(value => (
        <Tab
            key={value}
            value={value}
            isCurrent={value == currentValue}
            onClick={() => setCurrentValue(value)}
        />
    ))

    return <article className={styles.tabs}>{renderTabs}</article>
}
