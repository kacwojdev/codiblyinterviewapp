import ListItem from '../ListItem'
import Pagination from '../Pagination';

import { useEffect } from 'react'
import { connect } from "react-redux/es/exports";
import { useNavigate, useParams } from "react-router";
import { Link } from 'react-router-dom';
import { 
    AppState,
    fetchData,
    fetchIdData 
} from '../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faXmark, 
    faFaceDizzy,
    faFaceGrimace,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';

import {
    ListContainer,
    ModalContainer,
    ModalContainerBackground,
    ModalItemSpecifics,
    ModalCloseBtn,
    ModalItemSpecificContainer,
    ErrorContainer,
    LoadingContainer,
    SpinnerContainer
} from './style'

type ModalContentProps = {
    id: number,
    name: string,
    color: string,
    year: number,
    pantoneValue: string
    handleClose: any
}

type ListProps = {
    service: AppState | any,
    updateData: (pageId: number) => any
    filterData: (colorId: number) => any
    updatePage: (pageId: number) => any
    currentPage: number
}

const List = ({ service, updateData, filterData, updatePage, currentPage }: ListProps) => {

    const { colorId } = useParams<'colorId'>()
    const { modalColorId } = useParams<'modalColorId'>()
    const { pageId } = useParams<'pageId'>()
    const navigate = useNavigate()

    useEffect(() => {
        if (colorId) {
            filterData(Number(colorId))
        } else {
            if(pageId) {
                updatePage(Number(pageId))
                updateData(Number(pageId))
            } else {
                updateData(currentPage)
            }
        }
    }, [])

    const handleListItemClick = (event: any): void => {
        navigate(`/${pageId ? pageId : 1}/color/${event.target.dataset.colorId}`, { replace: true })
    }

    const handleCloseModal = (event: any): void => {
        navigate(`/${pageId ? pageId : 1}`, { replace: true })
    }

    return (
        <ListContainer rows={service.status === 'loaded' ? service.payload.data.length : 1}>
            {service.status === 'loading' && <LoadingContainer>
                <SpinnerContainer>
                    <FontAwesomeIcon icon={faSpinner} />
                </SpinnerContainer>
                Loading
            </LoadingContainer>}
            {service.status === 'loaded' && 
                service.payload.data.map((item: any) => (
                    <ListItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        year={item.year}
                        color={item.color}
                        onClick={handleListItemClick}
                    />
                ))
            }
            {service.status === 'error' && (
                <ErrorContainer>
                    <FontAwesomeIcon icon={faFaceDizzy} />
                    Error, backend moved to the dark side.
                    <Link style={{ color: 'white', fontSize: '.7rem'}} reloadDocument to="/">/ Go Home</Link>
                </ErrorContainer>
            )}
            {service.status === 'errornotfound' && (
                <ErrorContainer>
                    <FontAwesomeIcon icon={faFaceGrimace} />
                    We didn't found such id...
                    <Link style={{ color: 'white', fontSize: '.7rem'}} reloadDocument to="/">/ Go Home</Link>
                </ErrorContainer>
            )}
            {service.status === 'filtered' && (
                        <ListItem 
                            key={service.payload.data.id}
                            id={service.payload.data.id}
                            name={service.payload.data.name}
                            year={service.payload.data.year}
                            color={service.payload.data.color}
                            onClick={handleListItemClick}
                        />
            )}
            {service.status === 'loaded' && modalColorId && (
                <>
                    {service.payload.data
                        .filter((item: any) => item.id === Number(modalColorId))
                        .map((item: any) => (
                            <ModalContainer key={item.id} bgColor={item.color}>
                                <ModalContent
                                            id={item.id}
                                            name={item.name}
                                            year={item.year}
                                            color={item.color}
                                            pantoneValue={item.pantone_value} 
                                            handleClose={handleCloseModal}
                                            />
                            </ModalContainer>
                        )
                    )}
                    <ModalContainerBackground/>
                </>
            )}
            {service.status === 'filtered' && modalColorId && (
                <>
                        (
                            <ModalContainer key={service.payload.data.id} bgColor={service.payload.data.color}>
                                <ModalContent
                                            id={service.payload.data.id}
                                            name={service.payload.data.name}
                                            year={service.payload.data.year}
                                            color={service.payload.data.color}
                                            pantoneValue={service.payload.data.pantone_value} 
                                            handleClose={handleCloseModal}
                                            />
                            </ModalContainer>
                        )
                    <ModalContainerBackground/>
                </>
            )}
            <Pagination />
        </ListContainer>
    )
}

const ModalContent = ({ id, name, color, year, pantoneValue, handleClose }: ModalContentProps) => {
    return (
        <>
            <ModalItemSpecifics>
                <ModalItemSpecificContainer>
                    <span style={{fontSize: '2rem', fontWeight: '700'}}>{name}</span>
                </ModalItemSpecificContainer>
                <ModalItemSpecificContainer>
                    id: <span>{id}</span>
                </ModalItemSpecificContainer>
                <ModalItemSpecificContainer>
                    color: <span>{color}</span>
                </ModalItemSpecificContainer>
                <ModalItemSpecificContainer>
                    year: <span>{year}</span>
                </ModalItemSpecificContainer>
                <ModalItemSpecificContainer>
                    pantone value: <span>{pantoneValue}</span>
                </ModalItemSpecificContainer>
            </ModalItemSpecifics>
            <ModalCloseBtn onClick={handleClose}>
                <FontAwesomeIcon icon={faXmark} />
            </ModalCloseBtn>
        </>
    )
}

const mapStateToProps = (state: AppState) => ({
    service: state.result,
    currentPage: state.currentPage
})

const mapDispatchToProps = (dispatch: any) => ({
    updatePage: (page: number) => dispatch({ type: 'UPDATE_CURR_PAGE', page }),
    updateData: (page: number) => fetchData( dispatch, page ),
    filterData: (colorId: number) => fetchIdData(dispatch, colorId)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);