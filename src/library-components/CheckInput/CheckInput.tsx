import * as React from 'react'
import { useState } from 'react'

import './CheckInput.scss'

export interface CheckInputProps {
    className?: string
    label: string
    inputId?: string
    inputName: string
}
 
const CheckInput: React.SFC<CheckInputProps> = (props: CheckInputProps) => {
    const { className, label, inputId, inputName } = props
    const checkInputClasses = `CheckInput ${className ? className : ''}`

    const [checked, setChecked] = useState(false)

    return (
        <div className={checkInputClasses}>
            <label htmlFor={inputId}>{label}</label>
            <input type="checkbox" id={inputId} checked={checked} onChange={() => setChecked(!checked)} name={inputName} />
        </div>
    )
}
 
export default CheckInput