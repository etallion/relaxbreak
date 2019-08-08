import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login/Login";
import AdminNav from "./components/AdminNav";
import Nav from "./components/Nav";
import AdminQuestions from "./pages/admin/Questions";
import AdminAnswers from "./pages/admin/Answers";
import Admin from "./pages/admin";
import Quiz from "./pages/Quiz";
import Users from "./pages/admin/Users";
import Personality from "./pages/admin/Personality";
// import Quiz from "./pages/Quiz/index";
import Home from "./pages/Home";
// import Quiz from "./pages/Home/index";
import PersonalityLand from "./pages/PersonalityLand/PersonalityLand";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/admin" component={AdminNav} />
          <Route path="/login" />
          <Route path="/" component={Nav} />
        </Switch>
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/admin/questions" component={AdminQuestions} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin/questions" component={AdminQuestions} />
          <Route exact path="/admin/questions/:id" component={AdminAnswers} />
          <Route exact path="/admin/personality" component={Personality} />
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/personality" component={PersonalityLand} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
