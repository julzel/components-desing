import * as React from 'react'

import './Button.scss'

export interface ButtonProps {
    className?: string
    label?: string
    onClickHandler: () => void
}
 
const Button: React.SFC<ButtonProps> = (props: ButtonProps) => {
    const { className, label, onClickHandler } = props
    const buttonClasses = `Button ${className ? className : ''}`

    return (
        <button className={buttonClasses} onClick={onClickHandler}>
            {label}
        </button>
    )
}
 
export default Button