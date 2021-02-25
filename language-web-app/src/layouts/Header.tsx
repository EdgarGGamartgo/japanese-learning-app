import React from 'react'
import { HeaderProps } from './../types'

export const Header = ({ children, title = 'Edgar' }: HeaderProps) => {
    return (
        <>
            <h1>{title}</h1>
            {children}
        </>
    )
}
