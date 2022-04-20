import React, { useState } from "react";
import UserBar from './UserBar'
import PostList from "./PostList";
import CreatePost from "./CreatePost";

function App() {
  const [user, setUser] = useState("");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  
  const [posts, setPosts] = useState([])
  return (
    <div>
      <UserBar user={user} setUser={setUser} />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <PostList posts={posts} />
    </div>
  );
}

export default App;
