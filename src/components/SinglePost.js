import React, { useState, useEffect } from "react";
import axios from "axios";

function SinglePost(props) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      )
      .then(response => {
        setItem({ posts: response.data });
        console.log(props.match);
      })
      .catch(error => console.log(error));
  }, []);

  const handledelete = e => {
    e.preventDefault();
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`
      )
      .then(res => {
        props.history.push("/");
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h1> Apply Force </h1>
      <h1>{item.title}</h1>

      <button
        className="btn"
        type="submit"
        onClick={() => {
          props.history.push(`/updateredit/${props.match.params.id}`);
        }}
      >
        Update-Redit
      </button>

      <button className="btn-1" type="submit" onClick={handledelete}>
        Delete-Redit
      </button>
    </div>
  );
}

export default SinglePost;