import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Note from "./pages/Note";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={Note} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;

