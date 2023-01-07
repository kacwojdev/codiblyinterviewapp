import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'

import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import { useParams } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/page/:pageId" element={<Layout />} />
          <Route path="/page/:pageId/:colorId" element={<Layout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

const Layout = () => { 

  const { pageId } = useParams<"pageId">()
  const { colorId } = useParams<"colorId">()

  return(
    <>
      <SearchBar />
      <List pageId={pageId} colorId={colorId} />
      <Pagination pageId={pageId} />
    </>
  )
}

const NotFound = () => {
  return (
    <div>
      404 Not Found Page
    </div>
  )
}

export default App;
