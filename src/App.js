import { Switch, Route } from "react-router-dom";
import Homepage from "./mainpages/Homepage";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;
