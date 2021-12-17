import {Component} from "react";
import FavoriteBooks from "./client/FavoriteBooks";
import Timer from "./client/Timer";

import './App.css';

class App extends Component {
  state = {
    page: "home"
  }

  onChangePage = (pageName)=> {
    this.setState({page: pageName})
  }

  render(){
    const {onChangePage} = this;
    const {page} = this.state;
    return (
      <div className="App">
        <div>
          <button onClick={()=> onChangePage("home")}>Home page</button>
          <button onClick={()=> onChangePage("timer")}>Timer page</button>
        </div>
        {page === "home" && <FavoriteBooks />}
        {page === "timer" && <Timer /> }
      </div>
    )
  }
}

export default App;
