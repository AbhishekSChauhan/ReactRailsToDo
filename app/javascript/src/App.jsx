import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "components/Dashboard";
import CreateTask from "components/Tasks/CreateTask";
import { ToastContainer } from "react-toastify";
import { registerIntercepts, setAuthHeaders } from "apis/axios";
import PageLoader from "components/PageLoader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     setAuthHeaders(setLoading);
     registerIntercepts();
  }, []);

  if (loading){
    return(
      <div className="h-screen">
        <PageLoader/>
      </div>
    )
  }


  return (
    <Router>
      <ToastContainer />
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