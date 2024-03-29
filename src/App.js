import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import Results from "./pages/Results/Results";

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
          <Route path="/Results">
            <Results />
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
