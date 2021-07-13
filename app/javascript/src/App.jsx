import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "components/Dashboard";
import CreateTask from "components/Tasks/CreateTask";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setAuthHeaders(setLoading);
  }, []);


  return (
    <Router>
      <Switch>
      <Route exact path="/tasks/create" component={CreateTask} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About</div>} />
      </Switch>
    </Router>
  );
};

export default App;