import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <ul className="flex gap-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
        <li><Link to="/posts" className="hover:underline">Posts</Link></li>
      </ul>

    </nav>
  );
}
