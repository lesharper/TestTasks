'use client'

import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import { ROUTES } from '@/shared/constants'
import { BackLink } from '@/shared/ui/BackLink/BackLink'
import { InteractiveMiniature } from '@/features/Cards/InteractiveMiniature/InteractiveMiniature'

import icon_crown from '@/../public/icons/crown.svg'
import icon_fire from '@/../public/icons/fire.svg'

const staticData = {
    title: 'Ray Driving Theory',
}
export const Header = () => {
    const pathname = usePathname()

    console.log('pathname', pathname)
    const isHome = pathname === ROUTES.MAIN

    const getCustomHeaderBody = () => {
        if (isHome) {
            return (
                <>
                    <p>{staticData.title}</p>

                    <section className={styles.interactive}>
                        <InteractiveMiniature icon={{ src: icon_crown, alt: 'crown' }} />
                        <InteractiveMiniature
                            icon={{ src: icon_fire, alt: 'fire' }}
                            text="13"
                        />
                    </section>
                </>
            )
        }

        return (
            <BackLink
                text={pathname.slice(1)}
                href={'/'}
            />
        )
    }

    return <header className={styles.header}>{getCustomHeaderBody()}</header>
}
