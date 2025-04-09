import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import UserList from "./UserList";
import UserData from "./UserData";

const App = () => {
  return (
    <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={UserList}/>
            <Route path="/users/:id" component={UserData}/>
          </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
