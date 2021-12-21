
import './App.css';


import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Main page</h1>
      <nav>
          <ul>
            <li>
              <Link to= "/arabic-programmer/home">Home</Link>
            </li>
            <li>
              <Link to="/arabic-programmer/javascript">Javascript</Link>
            </li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default App;
