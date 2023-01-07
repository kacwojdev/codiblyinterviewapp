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
    return (
        <ListItemContainer bgColor={color}>
            <span>{ id }</span>
            <ColorName>{ name }</ColorName>
            <span>{ year }</span>
        </ListItemContainer>
    )
}

export default ListItem