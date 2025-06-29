export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
      {title && <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>}
      <div className="text-gray-600">{children}</div>
    </div>
  );
}
