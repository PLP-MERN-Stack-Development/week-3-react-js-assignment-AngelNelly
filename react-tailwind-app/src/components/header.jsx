const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">React + Tailwind App</h1>
      <nav>
        <a href="#" className="mr-4 hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
      </nav>
    </header>
  );
};

export default Header;
