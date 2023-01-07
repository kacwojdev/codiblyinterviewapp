import { connect } from "react-redux/es/exports";

type PaginationProps = {
    pageId?: string | undefined,
    currentPage: number
}

const Pagination = ({pageId, currentPage}: PaginationProps) => {

    return (
        <div>
            <button>Previous</button>
            {pageId}
            <button>Next</button>
        </div>
    )
}

const mapStateToProps = (state: {currentPage: number}) => ({
    currentPage: state.currentPage
})

export default connect(mapStateToProps)(Pagination)