import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-4 z-50 flex justify-center w-full">
      <nav className="w-3/4 bg-green-800 text-green-100 rounded-lg p-4 shadow-lg">
        <ul className="flex justify-around">
          <li>
            <Link href="#what-i-do" className="hover:text-white">
              What I do
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-white">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-white">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}