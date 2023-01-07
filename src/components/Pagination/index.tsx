import { connect } from "react-redux/es/exports";

type PaginationProps = {
    currentPage: number
}

const Pagination = ({currentPage}: PaginationProps) => {
    return (
        <div>
            <button>Previous</button>
            {currentPage}
            <button>Next</button>
        </div>
    )
}

const mapStateToProps = (state: {currentPage: number}) => ({
    currentPage: state.currentPage
})

export default connect(mapStateToProps)(Pagination)