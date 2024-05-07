import Pages from "./views/Pages";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <Category/>
      <Pages/>
    </div>
  );
}

export default App;
