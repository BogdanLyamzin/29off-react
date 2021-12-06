import Button from "./components/Button";
import Header from "./components/Header";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Главная страница" />
      {/* <Header title="Главная страница" subtitle="описание главной страницы" /> */}
      {/* Header({title: "Главная страница", subtitle: "описание главной страницы"}) */}
      <Button text="Нажми меня" />
      {/* {Button({text: "Нажми меня"})} */}
      <Button text="Съешь меня" />
    </div>
  );
}

export default App;
