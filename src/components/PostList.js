import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        <h1>List of Redits</h1>
        {posts.length > 0
          ? posts.map(post => (
              <ul key={post.id}>
                <Link to={`/postform/${post.id}`}>
                  <li className="title">{post.title}</li>
                  <li>{post.body}</li>
                </Link>
              </ul>
            ))
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;