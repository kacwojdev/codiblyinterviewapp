import styled from 'styled-components'

export const PaginationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const PaginationButton = styled.button`
    padding: 1rem;
    border: none;
    background: none;
    font-size: 1rem;
    weight: 700;
    color: white;
    cursor: ${props => props.disabled ? 'cursor' : 'pointer'};
    opacity: ${props => props.disabled ? 0.5 : 1}
`
export const PageIdenty = styled.span`
    color: white;
    font-size: 1rem;
`