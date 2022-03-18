import React, {FC, useEffect} from 'react';
import styles from "./button.module.scss"
import {useFormContext} from "react-hook-form";


interface ButtonProps {
    type?: 'submit' | 'reset' | 'button';
    width: number
    height: number
    text: string
    color: string
    background: string
    onClick: () => void
    disabled?: boolean
}

const Button: FC<ButtonProps> = ({
                                     type,
                                     width,
                                     height,
                                     text,
                                     color,
                                     background,
                                     onClick,
                                     disabled
}) => {
    const style = {
        width: width,
        height: height,
        background: background,
        color: color
    }
    return <button
        type={type = "button"}
        className={styles.btn} style={disabled ? {...style,background: "#AFAFAF"} : {...style}}
        onClick={onClick}
        disabled={disabled}
    >
        {text}
    </button>;
}

export default Button;