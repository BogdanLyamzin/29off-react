import './App.css';

const name = "Всеслав Брячеславович Полоцкий";
const flag = true;
const result = null;
let user;
const arr = ["Нам ярость!", "Мы не сеем!"]
const obj = {};

function App() {
  
  return (
    <>
      <div className="App">
        <p>{name}</p>
        <p>{flag ? "Услышь мой рёв!" : "Ланнистеры всегда платят свои долги"}</p>
        <p>{result}</p>
        <p>{user}</p>
        <div>{arr}</div>
        <p>{obj}</p>
        {/* <label htmlFor="name">Имя</label>
        <input id="name" />
        <img /> */}
      </div>
      <div></div>
    </>
  );
}

export default App;
