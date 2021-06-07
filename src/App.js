import React from 'react';

import * as api from './api';
import './styles.css';

function List() {
  // replace with API call
  const posts = [{ id: 1, title: 'Hello world!', body: 'Hello world!' }];

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

function Create() {
  function onClick() {
    const newPost = {
      title: 'New post',
      body: 'New post',
    };

    // replace with API call
    alert("Let's create a post");
  }

  return <button onClick={onClick}>Create post</button>;
}

export default function App() {
  return (
    <div className="container">
      <h1>WorkplaceBuddy</h1>
      <p>
        Can you change the following list to an interactive one that fetches
        from the API?
      </p>

      <Create />

      <h2>Current posts</h2>

      <List />
    </div>
  );
}
