import { Link } from "react-router-dom"

import {
    NotFoundContainer
} from './style'

import SearchBar from "../SearchBar"
import Footer from "../Footer"

const NotFound = () => {
    return (
        <>
            <SearchBar />
            <NotFoundContainer>
                404 Not Found Page
                <Link to="/">/ Go Home</Link>
            </NotFoundContainer>
            <Footer />
        </>
    )
}

export default NotFound