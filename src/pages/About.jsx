export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">About This App</h2>
      <p className="text-gray-700 leading-relaxed">
        Welcome to our blog-style task  App! This app was built as part of a hands-on React assignment to help you practice:
      </p>

      <ul className="list-disc pl-5 text-gray-700 my-4 space-y-1">
        <li>Creating, viewing, and managing posts</li>
        <li>Using React Router for navigation</li>
        <li>Fetching data from external APIs</li>
        <li>Implementing search, pagination, and routing</li>
      </ul>

      <p className="text-gray-700">
        It also includes bonus a task manager for everyday productivity. We're excited to keep improving it!
      </p>

      <div className="mt-6 text-sm text-gray-500 italic">
        Built with determination using Vite + React + Tailwind CSS by Angela Chinweike
      </div>
    </div>
  );
}
