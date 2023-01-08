import styled from 'styled-components'

export const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin-top: 1rem;

    & > h1 {
        margin: 0;
    }

    @media (max-width: 780px) {
        flex-direction: column;

        & > h1 {
            font-size: 1.7rem;
            margin: 1rem auto;
        }
    }
`

export const SearchBarForm = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: minmax(200px, 1fr) 50px;
`

export const SearchButton = styled.button`
    padding: 1rem;
    border: .1rem solid black;
    border-radius: 0 15px 15px 0;
    background: black;
    font-size: 1rem;
    color: white;
    cursor: pointer;
`

export const SearchInput = styled.input`
    padding: 1rem;
    border: .1rem solid grey;
    border-radius: 15px 0 0 15px;
    background: white;
    font-size: 1rem;
    color: black;
`

export const CompanyName = styled.span`
    background: -webkit-linear-gradient(75.98deg,#C3F69A -31.32%,#7FE8A4 36.95%,#46DDAE 100.34%,#30D9B2 131.23%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`