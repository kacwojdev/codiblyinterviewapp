import { 
  BrowserRouter as Router, 
  Route, 
  Routes  
} from "react-router-dom";
import { useParams } from "react-router";

import SearchBar from "./components/SearchBar";
import List from "./components/List";
import NotFound from "./components/NotFound";
import Footer from './components/Footer'

import { AppContainer } from './style'
import { useState } from "react";

const App = () => {
  return (
    <AppContainer>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/:colorId" element={<Layout />} />
          <Route path="/color/:colorId" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

const Layout = () => { 
  return(
    <>
      <SearchBar />
      <List />
      <Footer />
    </>
  )
}

export default App;
