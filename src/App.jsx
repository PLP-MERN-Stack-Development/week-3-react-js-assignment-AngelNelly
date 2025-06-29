import { useState, useEffect } from "react";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Routes>
      <Route path="/posts" element={<Posts posts={posts} />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/create" element={<CreatePost onCreate={handleCreatePost} />} />
    </Routes>
  );
}
