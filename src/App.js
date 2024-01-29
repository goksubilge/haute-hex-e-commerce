import { Switch, Route } from "react-router-dom";
import Homepage from "./mainpages/Homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
      </Switch>
    </div>
  );
}

export default App;
