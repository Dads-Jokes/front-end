import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class CreateAccount extends React.Component{
    state = {
        credentials: {
            username: "",
            password: ""
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

    createAccount = e => {
        e.preventDefault();
        axiosWithAuth()
          .post("/createAccount", this.state.credentials)
          .then(res => {
            localStorage.setItem("token", res.data.payload);
            this.props.history.push("/homepage");
          })
          .catch(err => {
            localStorage.removeItem("token");
            console.log(err);
          });
    };

    render() {
        return (
            <>
                <h1>Welcome to the Sub-Redditor!</h1>
                <div>
                <form onSubmit={this.createAccount}>
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
                    <button>Sign Up</button>
                </form>
                </div>
            </>
        );
    };
}

export default CreateAccount;