import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';  // Correctly importing the AuthContext

const Header = () => {
    const { user, logOut } = useAuth();  // Access user info and logout function

    return (
        <header className="bg-slate-600 p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-xl font-bold">
                <Link to="/">OutfitRecommendation</Link>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-4">
                {/* Gallery & Weather Card Always Visible */}
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

                {/* If user is logged in, show profile and logout options */}
                {user ? (
                    <>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive ? 'text-yellow-300' : 'text-white'
                            }
                        >
                            Profile
                        </NavLink>
                        <button
                            onClick={logOut}
                            className="text-white hover:text-yellow-300"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    /* If no user is logged in, show login/signup */
                    <>
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
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
