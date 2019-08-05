import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "../../pages/NoMatch";
import Login from "../../pages/Login";
import AdminNav from "../../components/AdminNav";
import AdminQuestions from "../../pages/admin/Questions";
import AdminAnswers from "../../pages/admin/Answers";
import Users from "../../pages/admin/Users";

function App() {
  return (
  
      <div>
        <AdminNav />
        {/* <Switch> */}
          {/* <Route exact path="/admin" component={AdminQuestions} /> */}
          <Route exact path="/questions" component={AdminQuestions} />
          <Route exact path="/questions/:id" component={AdminAnswers} />
          <Route exact path="/users" component={Users} />
          <Route component={NoMatch} />
        {/* </Switch> */}
      </div>
   
  );
}

export default App;