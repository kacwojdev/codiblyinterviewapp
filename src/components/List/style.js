import { faLevelDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

export const ListContainer = styled.div`
    display: grid;
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 2rem 1rem 2rem;
    border-radius: 15px;
    background: linear-gradient(45deg, #041d34, #096368);
`

export const ModalContainerBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0 0 0 / 0.5);
    z-index: 1;
`

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    padding: 2rem;
    border-radius: 15px;
    background-color: ${props => props.bgColor};
    color: white;
    box-shadow: 0 0 20px 10px rgb(0 0 0 / 16%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10rem;
`

export const ModalItemSpecifics = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
`

export const ModalCloseBtn = styled.button`
    border: none;
    border-radius: 15px;
    background: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
`

export const ModalItemSpecificContainer = styled.div`
    color: black;
    font-size: .7rem;

    & > span {
        font-size: 1rem;
        font-weight: 700;
    }
`