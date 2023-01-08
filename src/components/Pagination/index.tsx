import { connect } from "react-redux/es/exports";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faArrowRight,
    faArrowLeft
 } from '@fortawesome/free-solid-svg-icons'

import {
    PaginationButton,
    PaginationContainer
} from './style'

type PaginationProps = {
    pageId?: string | undefined,
    currentPage: number
}

const Pagination = ({pageId, currentPage}: PaginationProps) => {
    return (
        <PaginationContainer>
            <PaginationButton>
                <FontAwesomeIcon 
                    style={{ marginRight: '10px' }}
                    icon={faArrowLeft}
                />
                Previous
            </PaginationButton>
            {pageId}
            <PaginationButton>
                Next
                <FontAwesomeIcon 
                    style={{ marginLeft: '10px' }}
                    icon={faArrowRight}
                />
            </PaginationButton>
        </PaginationContainer>
    )
}

const mapStateToProps = (state: {currentPage: number}) => ({
    currentPage: state.currentPage
})

export default connect(mapStateToProps)(Pagination)