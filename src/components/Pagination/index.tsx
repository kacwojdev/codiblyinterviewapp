import { connect } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowRight,
    faArrowLeft
 } from '@fortawesome/free-solid-svg-icons'

import {
    PaginationButton,
    PaginationContainer,
    PageIdenty
} from './style'

import { 
    AppState,
    fetchData
} from '../../store';

type PaginationProps = {
    updatePage: any,
    updateData: any,
    maxPages: number
    currentPage: number
}

const Pagination = ({updatePage, updateData, currentPage, maxPages}: PaginationProps) => {

    const navigate = useNavigate()

    const onNextPage = () => {
        const nextPageNumber = Number(currentPage + 1)
        updatePage(nextPageNumber)
        updateData(nextPageNumber)
    }

    const onPrevPage = () => {
        const prevPageNumber = Number(currentPage - 1)
        updatePage(prevPageNumber)
        updateData(prevPageNumber)
    }

    return (
        <PaginationContainer>
            <PaginationButton disabled={currentPage === 1 ? true : false} onClick={onPrevPage}>
                <FontAwesomeIcon 
                    style={{ marginRight: '10px' }}
                    icon={faArrowLeft}
                />
                Previous
            </PaginationButton>
            <PageIdenty>{currentPage}</PageIdenty>
            <PaginationButton disabled={currentPage === maxPages ? true : false} onClick={onNextPage}>

                Next
                <FontAwesomeIcon 
                    style={{ marginLeft: '10px' }}
                    icon={faArrowRight}
                />
            </PaginationButton>
        </PaginationContainer>
    )
}

const mapStateToProps = (state: AppState) => ({
    currentPage: state.currentPage,
    maxPages: state.result.status === 'loaded' ? state.result.payload.total_pages : 1
})

const mapDispatchToProps = (dispatch: any) => ({
    updatePage: (page: number) => dispatch({type: 'UPDATE_CURR_PAGE', page}),
    updateData: (page: number) => fetchData(dispatch, page)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)