import { gsap } from 'gsap'
import React from 'react'

import { 
    ListItemContainer,
    ColorName
 } from './style'

type ListItemProps = {
    name: string,
    year: number,
    id: number,
    color: string
}

const ListItem = ({ id, name, year, color }: ListItemProps) => {

    const onEnter = ({ currentTarget }: any): void => {
        gsap.to(currentTarget, {scale: 1.025})
    }

    const onLeave = ({ currentTarget }: any): void => {
        gsap.to(currentTarget, {scale: 1})
    }

    return (
        <ListItemContainer onMouseEnter={onEnter} onMouseLeave={onLeave} bgColor={color}>
            <span>{ id }</span>
            <ColorName>{ name }</ColorName>
            <span>{ year }</span>
        </ListItemContainer>
    )
}

export default ListItem