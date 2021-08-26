import * as React from 'react'

import './Badge.scss'

export interface BadgeProps {
    className?: string
    content: string
}
 
const Badge: React.SFC<BadgeProps> = (props: BadgeProps) => {
    const { className, content } = props
    const badgeClasses = `badge ${className ? className : ''}`

    return (
        <div className={badgeClasses}>
            {content}
        </div>
    )
}
 
export default Badge