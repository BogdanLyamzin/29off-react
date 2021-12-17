import Navbar from './client/Navbar';
import Main from "./client/Main";

import './App.css';

import LangContext from './LangContext';

function App() {
  return (
    <LangContext>
      <div className="App">
        <Navbar />
        <Main />
      </div>
    </LangContext>
  );
}

export default App;
