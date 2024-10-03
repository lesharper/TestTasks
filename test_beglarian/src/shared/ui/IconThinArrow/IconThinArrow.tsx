import Image from 'next/image'
import arrow from '@/../public/icons/arrow-left.svg'

export const IconThinArrow = () => {
    return (
        <Image
            src={arrow}
            alt="thin-arrow"
        />
    )
}
