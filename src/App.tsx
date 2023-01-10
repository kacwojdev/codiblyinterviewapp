import { 
  BrowserRouter as Router, 
  Route, 
  Routes  
} from "react-router-dom";

import SearchBar from "./components/SearchBar";
import List from "./components/List";
import NotFound from "./components/NotFound";
import Footer from './components/Footer'

import { AppContainer } from './style'

const App = () => {
  return (
    <AppContainer>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/:pageId" element={<Layout />} />
          <Route path="/:pageId/search/:colorId" element={<Layout />} />
          <Route path="/:pageId/color/:modalColorId" element={<Layout />} />
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
