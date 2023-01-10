import { useNavigate } from "react-router"
import { Link } from "react-router-dom";
import { connect } from "react-redux/es/exports";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import {
    SearchBarContainer,
    SearchBarForm,
    SearchButton,
    SearchInput,
    CompanyName
} from './style'

import { 
    AppState,
    fetchData, 
    fetchIdData 
} from "../../store"

type SearchBarProps = {
    currentPage: number
    updateData: (pageId: number) => any
    filterData: (colorId: number) => any
}

const SearchBar = ({currentPage, updateData, filterData}: SearchBarProps) => {

    const navigate = useNavigate()

    const handleFormSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault()
        const target = event.target as typeof event.target & {
            number: { value: string }
        }
        const id = Number(target.number.value)

        if (id) {
            navigate(`/${currentPage}/search/${id}`, {replace: true, })
            filterData(id)
        } else {
            navigate(`/`, { replace: true })
            updateData(1)
        }
        
    }

    return (
        <SearchBarContainer>
                <h1>
                    <Link reloadDocument style={{ textDecoration: 'none', color: 'black'}} to="/">
                        <CompanyName>Codibly </CompanyName> 
                        <span>Interview Task</span>
                    </Link>
                </h1>
            <SearchBarForm onSubmit={handleFormSubmit}>
                <SearchInput 
                    type="number"
                    name="number"
                    placeholder="search by id ..."
                />
                <SearchButton 
                    type="submit"
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </SearchButton>
            </SearchBarForm>
        </SearchBarContainer>
    )
}

const mapStateToProps = (state: AppState) => ({
    currentPage: state.currentPage
})

const mapDispatchToProps = (dispatch: any) => ({
    filterData: (colorId: number) => fetchIdData(dispatch, colorId),
    updateData: (page: number) => fetchData( dispatch, page ),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar)