import React, { Component } from "react";
import PostForm from "./components/PostForm";
import Home from "./components/Home";
import Login from "./components/Login";
import SinglePost from "./components/SinglePost";
import UpdateRedit from "./components/UpdateRedit";
import { Route, Link, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import PostContext from "./contexts/PostContext";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateAccount from "./components/CreateAccount";
import "../src/Styles.scss";


class App extends Component {
    render() {
      return (
        <div className="App">
          <nav>
            <Link to="/login"> Login </Link> <hr />
            <Link to="/">Home</Link> <hr />
            <Link to="/postform">PostForm</Link>
          </nav>
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
  
            <Route
              exact
              path="/postform"
              render={props => {
                return <PostForm {...props} />;
              }}
            />
  
            <Route
              path="/postform/:id"
              render={props => {
                return <SinglePost {...props} />;
              }}
            />
  
            <Route
              path="/updateredit/:id"
              render={props => {
                return <UpdateRedit {...props} />;
              }}
            />
          </Switch>
        </div>
      );
    }
  }
  
  export default App;


