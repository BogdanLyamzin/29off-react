import {BrowserRouter as Router} from "react-router-dom";

import Routes from "./routes";
import MainMenu from './client/MainMenu';

import './styles/App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <MainMenu />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
