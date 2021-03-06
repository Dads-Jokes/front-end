import React from 'react';
import Home from "./Home";
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component{
    state = {
        credentials: {
            username: "",
            password: "", 
        }
    };

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
          .post("/auth/login", this.state.credentials)
          .then(res => {
            localStorage.setItem("token", res.data);
            this.props.history.push("/home");
          })
          .catch(err => {
            localStorage.removeItem("token");
            console.log("invalid login: ", err);
          });
    };

    render() {
        return (
            <>
                <h1>Welcome to the Sub-Redditor!</h1>
                <div>
                  <form onSubmit={this.login}>
                      <input
                      type="text"
                      name="username"
                      value={this.state.credentials.username}
                      onChange={this.handleChange}
                      />
                      <input
                      type="password"
                      name="password"
                      value={this.state.credentials.password}
                      onChange={this.handleChange}
                      />
                      <button>Log In</button>
                  </form>
                </div>
            </>
        );
    };
}

export default Login;