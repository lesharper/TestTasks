import { ROUTES } from '@/shared/constants'
import icon_home from '@/../public/icons/home.svg'
import icon_route from '@/../public/icons/route.svg'
import icon_ranking from '@/../public/icons/ranking.svg'
import icon_user from '@/../public/icons/user.svg'
import { INavigationItem } from '@/features/NavigationItem/types'

export const MOCK_NAVIGATION_BAR: INavigationItem[] = [
    {
        icon: {
            src: icon_home,
            alt: 'Home',
        },
        link: { href: ROUTES.MAIN, text: 'Home' },
    },
    {
        icon: {
            src: icon_route,
            alt: 'Plan',
        },
        link: { href: ROUTES.PLAN, text: 'Your plan' },
    },
    {
        icon: {
            src: icon_ranking,
            alt: 'Leaderboard',
        },
        link: { href: ROUTES.LEADERBOARD, text: 'Leaderboard' },
    },
    {
        icon: {
            src: icon_user,
            alt: 'Profile',
        },
        link: { href: ROUTES.PROFILE, text: 'Profile' },
    },
]
