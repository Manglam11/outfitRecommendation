import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-slate-600 p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-xl font-bold">
                <Link to="/">OutfitRecommendation</Link>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-4">
                {/* NavLink for active state styling */}
                <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                        isActive ? 'text-yellow-300' : 'text-white'
                    }
                >
                    Gallery
                </NavLink>
                <NavLink
                    to="/card"
                    className={({ isActive }) =>
                        isActive ? 'text-yellow-300' : 'text-white'
                    }
                >
                    Weather Card
                </NavLink>

                {/* Authentication */}
                <NavLink
                    to="/signup"
                    className={({ isActive }) =>
                        isActive ? 'text-yellow-300' : 'text-white'
                    }
                >
                    Sign Up
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? 'text-yellow-300' : 'text-white'
                    }
                >
                    Login
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
