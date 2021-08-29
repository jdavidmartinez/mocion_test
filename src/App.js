import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../src/pages/Home";
import Questions from "./pages/Questions";

const App = () => {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Questions">
            <Questions />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
