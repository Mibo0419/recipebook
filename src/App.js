import Pages from "./views/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <GiKnifeFork id="knife-fork" />
        <Link to={'/'}>
        Eats
        </Link>
      </nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
