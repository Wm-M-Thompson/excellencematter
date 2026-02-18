import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WEC MFG | High-Quality Metal Lockers & Storage Solutions",
  description: "WEC Manufacturing: Custom metal lockers since 1987. Durable, made-to-order solutions for schools, gyms, industrial use. Proudly serving the USA and globally.",
  keywords: "wec mfg, wec manufacturing, metal lockers, custom lockers, storage solutions",
  openGraph: {
    title: "WEC MFG",
    description: "Leading manufacturer of durable metal lockers.",
    url: "https://itswec.thompsonsoftware.tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <header className="bg-blue-900 text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <a href="/" className="text-3xl font-bold">WEC MFG</a>
            <nav className="flex items-center space-x-6">
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>

{/* Products Dropdown – Hover to open, Click "Products" goes to /products */}
<li className="relative group pb-4">  {/* pb-4 helps with hover bridge */}
  <Link 
    href="/products" 
    className="hover:underline cursor-pointer"
  >
    Products
  </Link>

  {/* First-level dropdown */}
  <div className="absolute left-0 top-full hidden group-hover:block bg-white text-gray-800 shadow-lg rounded-md min-w-[180px] -mt-1 z-50 dropdown-content">
    <ul className="py-2">
      {/* Lockers with nested submenu */}
      <li className="relative group/sub pb-2">
        <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center">
          Lockers
          <span className="text-xs">▶</span>
        </span>

        {/* Submenu under Lockers */}
        <div className="absolute left-full top-0 hidden group-hover/sub:block bg-white text-gray-800 shadow-lg rounded-md min-w-[220px] -ml-1 z-50 dropdown-content">
          <ul className="py-2">
            <li><Link href="/products/metal-lockers" className="block px-4 py-2 hover:bg-gray-100">Metal Lockers</Link></li>
            <li><Link href="/products/durable" className="block px-4 py-2 hover:bg-gray-100">Durable</Link></li>
            <li><Link href="/products/durable-plus" className="block px-4 py-2 hover:bg-gray-100">Durable Plus</Link></li>
            <li><Link href="/products/competitive" className="block px-4 py-2 hover:bg-gray-100">Competitive</Link></li>
            <li><Link href="/products/athletic" className="block px-4 py-2 hover:bg-gray-100">Athletic</Link></li>
            <li><Link href="/products/all-welded-plus" className="block px-4 py-2 hover:bg-gray-100">All-Welded Plus</Link></li>
            <li><Link href="/products/angle-iron" className="block px-4 py-2 hover:bg-gray-100">Angle Iron</Link></li>
            <li><Link href="/products/locker-images" className="block px-4 py-2 hover:bg-gray-100">Locker Images</Link></li>
          </ul>
        </div>
      </li>

      <li>
        <Link href="/products/other" className="block px-4 py-2 hover:bg-gray-100">Other Products</Link>
      </li>
    </ul>
  </div>
</li>
                <li><Link href="/resources" className="hover:underline">Resources</Link></li>
                <li><Link href="/contact-page" className="hover:underline">Contact</Link></li>
                <li><Link href="/interaction" className="hover:underline">Interaction</Link></li>
                <li><Link href="/referral-program" className="hover:underline">Referral Program</Link></li>
              </ul>

              {/* Globe Icon with Coming Soon Tooltip */}
              <div className="relative group">
                <span className="text-2xl cursor-pointer">🌍</span>
                <div className="absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1 -top-10 left-1/2 transform -translate-x-1/2">
                  Coming Soon
                </div>
              </div>
            </nav>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg mb-2">WEC Manufacturing</p>
            <p>P.O. Box 130508, Dallas, TX 75313 | 469-640-6287 | info@itswec.com</p>
            <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} WEC MFG. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}