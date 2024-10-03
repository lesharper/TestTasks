import { IImage } from '@/shared/types'
import icon_pen from '@/../public/icons/pen.svg'
import icon_chart_bar from '@/../public/icons/chart-bar.svg'
import icon_book_text from '@/../public/icons/book-text.svg'
import icon_bookmark_user from '@/../public/icons/bookmarks-user.svg'
export const MOCK_ICON_INFO_CARDS: IImage[] = [
    {
        src: icon_pen,
        alt: 'icon_pen',
        title: 'Mistakes',
    },
    {
        src: icon_chart_bar,
        alt: 'icon_chart_bar',
        title: 'Statistics',
    },
    {
        src: icon_book_text,
        alt: 'icon_book_text',
        title: 'Highway Code',
    },
    {
        src: icon_bookmark_user,
        alt: 'icon_bookmark_user',
        title: 'Favorites',
    },
]
