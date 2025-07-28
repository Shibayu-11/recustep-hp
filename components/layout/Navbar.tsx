import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center pl-4 md:pl-0">
            <img 
              src="/images/logo/logo.png" 
              alt="リクステップ" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 pr-4">
            <Link href="/services" className="text-gray-700 hover:text-primary transition-colors">
              サービス
            </Link>
            <Link href="/company" className="text-gray-700 hover:text-primary transition-colors">
              会社概要
            </Link>
            <Link href="/results" className="text-gray-700 hover:text-primary transition-colors">
              実績
            </Link>
            <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              お問い合わせ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}