import React, { useState } from "react"
import { useNavigate } from "react-router"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import {
    SearchBarContainer,
    SearchBarForm,
    SearchButton,
    SearchInput,
    CompanyName
} from './style'

const SearchBar = () => {

    const [searchId, setSearchId] = useState<number | null>(null)

    const handleFormSubmit = (event: React.SyntheticEvent): void => {
        event.preventDefault()
        const target = event.target as typeof event.target & {
            number: { value: string }
        }
        const id = target.number.value
        setSearchId(Number(id))
    }

    return (
        <SearchBarContainer>
            <h1>
                <CompanyName>Codibly </CompanyName> 
                <span>Interview Task</span>
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

export default SearchBar