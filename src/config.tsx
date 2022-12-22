import React from 'react'
import Trading from "./components/Trading"
import Archive from "./components/Archive"

interface IConfig{
    link: string,
    name?: string,
    element: React.FunctionComponent | any;
}

export const config: IConfig[] = [
    { link: '/',  name: 'Traing', element: <Trading />, },
    { link: '/archive', name: 'Archive',element:   <Archive />, },
]


