import icon_l_exam from '@/../public/icons/l-exam.svg'
import icon_rocket_launch from '@/../public/icons/rocket-launch.svg'
import icon_tv_play from '@/../public/icons/tv-play.svg'
import icon_game_controller from '@/../public/icons/game-controller.svg'
import icon_arrow from '@/../public/icons/arrow.svg'
import { ISimpleInfoCard } from '@/shared/ui/SimpleInfoCard/types'

export const MOCK_SIMPLE_INFO_CARDS: ISimpleInfoCard[] = [
    {
        icon: {
            src: icon_l_exam,
            alt: 'DVSA Exam icon',
        },
        iconColor: 'red',
        text: 'DVSA Exam',
    },
    {
        icon: {
            src: icon_rocket_launch,
            alt: 'Express mode',
        },
        iconColor: 'purple',
        text: 'Express mode',
    },
    {
        icon: {
            src: icon_tv_play,
            alt: 'Hazard perception',
        },
        iconColor: 'purple',
        text: 'Hazard perception',
    },
    {
        icon: {
            src: icon_arrow,
            alt: 'Road signs',
        },
        iconColor: 'purple',
        text: 'Road signs',
    },
    {
        icon: {
            src: icon_game_controller,
            alt: 'Multiplayer Learning',
        },
        iconColor: 'purple',
        text: 'Multiplayer Learning',
    },
]
