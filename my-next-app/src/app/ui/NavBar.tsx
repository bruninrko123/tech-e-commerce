import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <Link href="/" className="text-xl font-bold text-gray-900">
        TechShop
      </Link>

      <ul className="flex items-center gap-8">
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
            Products
          </Link>
        </li>
        <li>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600 transition-colors">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}
