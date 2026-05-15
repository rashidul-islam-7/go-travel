import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/destination">Destinations</Link></li>
                            <li><Link href="/booking">My Bookings </Link></li>
                            <li><Link href="/admin">Admin </Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold group cursor-pointer">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-500">
                            GoTravel
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/destination">Destinations</Link></li>
                        <li><Link href="/booking">My Bookings </Link></li>
                        <li><Link href="/admin">Admin </Link></li>
                    </ul>
                </div>
                <div className=" navbar-end flex justify-end gap-4 items-center list-none">
                    <li><Link href="#">Sign In</Link></li>
                    <li><Link href="#">Sign Up</Link></li>

                </div>
            </div>
        </div>
    )
}

export default Navbar
