import React, { Component } from "react";
import axios from "axios";
import PostList from "./PostList";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div className="quotes-form">
        <h2> SUB-REDIT </h2>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              placeholder="id :"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Title :"
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              placeholder="Post :"
              onChange={this.changeHandler}
            />
          </div>
          <button className="quotes-btn" type="submit">
            Submit
          </button>
        </form>
        <br />
        <br />
        <br />
        <PostList />
      </div>
    );
  }
}

export default PostForm;