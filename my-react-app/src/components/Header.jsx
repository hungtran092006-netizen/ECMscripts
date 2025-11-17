export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Trang Tour du lich</h1>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <a href="/" className="hover:text-orange-500 transition">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-orange-500 transition">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-orange-500 transition">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}