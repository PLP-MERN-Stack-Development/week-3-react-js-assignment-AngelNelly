import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Posts({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 12;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // reset to page 1 when searching
  }, [searchQuery, posts]);

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 border border-gray-300 rounded"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {currentPosts.map((post) => (
          <Card
            key={post.id}
            title={
              <Link
                to={`/posts/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            }
          >
            <p>{post.body}</p>
          </Card>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center mt-6 gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded border text-sm ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
