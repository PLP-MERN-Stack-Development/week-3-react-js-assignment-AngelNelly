import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "../components/Card";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch(() => setError(true));
  }, [id]);

  if (error) return <p className="text-red-500">Failed to load post.</p>;
  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <Link to="/posts" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Posts
      </Link>

      <Card title={post.title}>
        <p>{post.body}</p>
      </Card>
    </div>
  );
}
