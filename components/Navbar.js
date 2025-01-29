// Navbar.js
'use client'
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
// import { useUser } from '@clerk/nextjs';

const Navbar = () => {
  // const user = useUser();
  // console.log(user.user?.id);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">HelpChat</Link>
        <nav className="flex items-center space-x-6">
          <Link href="/forums" className="text-gray-700 hover:text-blue-600">Forum</Link>
          <Link href="/userchat" className="text-gray-700 hover:text-blue-600">UserChat</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          <Link href="#" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</Link>
          <div className="flex items-center">
            <UserButton className="ml-4" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;