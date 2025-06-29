import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home"; // ✅ re-add Home
import About from "./pages/About"; // ✅ add About
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
      {/* Default route to Home */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts posts={posts} />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="create" element={<CreatePost onCreate={handleCreatePost} />} />
      </Route>

      {/* Optional: Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
