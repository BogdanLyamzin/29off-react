import MainMenu from './components/MainMenu';
import CollapseItem from './components/CollapseItem';
import ReverseButton from "./components/ReverseButton";
import ToDoList from "./components/ToDoList";

import './styles/App.css';

import dataset from './data';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        {/* <MainMenu items={dataset.mainMenu} /> */}
      </nav>
      <ToDoList />
      {/* <ReverseButton firstText="Нажми меня" secondText="Съешь меня" /> */}
      {/* <CollapseItem {...dataset.collapseItem} /> */}
      
    </div>
  );
}

export default App;
