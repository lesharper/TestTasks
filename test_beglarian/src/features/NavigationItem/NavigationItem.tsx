'use client'

import { usePathname } from 'next/navigation'
import styles from './NavigationItem.module.css'
import Image from 'next/image'
import { INavigationItem } from '@/features/NavigationItem/types'
import Link from 'next/link'
import { getClassName } from '@/shared/lib'

export const NavigationItem = ({ icon, link }: INavigationItem) => {
    const pathName = usePathname()

    const isCurrentRoute = link.href === pathName

    return (
        <Link
            href={link.href}
            className={styles.container}
        >
            <figure className={getClassName(styles.icon, isCurrentRoute && styles.activeIcon)}>
                <Image {...icon} />
            </figure>
            <p className={getClassName(isCurrentRoute && styles.active)}>{link.text}</p>
        </Link>
    )
}
