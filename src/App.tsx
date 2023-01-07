import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import List from "./components/List";

const App = () => {
  return (
    <div className="App">
      <SearchBar />
      <List />
      <Pagination />
    </div>
  );
}

export default App;
