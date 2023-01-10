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
    onClick: any
}

const ListItem = ({ id, name, year, color, onClick }: ListItemProps) => {

    const onEnter = ({ currentTarget }: any): void => {
        gsap.to(currentTarget, {scale: 1.025})
    }

    const onLeave = ({ currentTarget }: any): void => {
        gsap.to(currentTarget, {scale: 1})
    }

    return (
        <ListItemContainer data-color-id={id} onMouseEnter={onEnter} onMouseLeave={onLeave} onClick={onClick} bgColor={color}>
            <span>{ id }</span>
            <ColorName>{ name }</ColorName>
            <span>{ year }</span>
        </ListItemContainer>
    )
}

export default ListItem