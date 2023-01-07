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

const App = () => {
  return (
    <AppContainer>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/page/:pageId" element={<Layout />} />
          <Route path="/page/:pageId/:colorId" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

const Layout = () => { 

  const { pageId } = useParams<"pageId">()
  const { colorId } = useParams<"colorId">()

  return(
    <>
      <SearchBar />
      <List pageId={pageId} colorId={colorId} />
      <Footer />
    </>
  )
}

export default App;
