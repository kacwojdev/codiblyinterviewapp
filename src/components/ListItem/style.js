import styled from 'styled-components'

export const ListItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 5px;
    color: white;
    background: ${props => props.bgColor};
    cursor: pointer;
`

export const ColorName = styled.span`
    font-size: 2rem;
    font-weight: 700;

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`