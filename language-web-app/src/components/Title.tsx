import React from 'react'

interface TitleProps {
    active: boolean
    children: React.ReactNode
    className?: string
}

export const Title = ({ className, children, active }: TitleProps) => {
    return (
        <div className={className}>
        <h1>
            Ed
        </h1>
        {children}
        {active ? "HEY": "NOO"}
        </div>
        
    )
}

