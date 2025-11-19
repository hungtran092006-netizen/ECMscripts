import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Trang Tour du lịch</h1>
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-500 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
