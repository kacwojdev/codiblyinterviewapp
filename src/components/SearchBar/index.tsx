import React, { useState } from "react"

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
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Search</label>
                <input type="number" name="number" placeholder="search by id ..."></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar