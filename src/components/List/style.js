import styled from 'styled-components'

export const ListContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 2rem 1rem 2rem;
    border-radius: 15px;
    background: linear-gradient(45deg, #041d34, #096368);
`