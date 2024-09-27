import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <header className="bg-slate-600 p-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-xl font-bold">
                <Link to="/">OutfitRecommendation</Link>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-4">
                <NavLink
                    to="/card"
                    className={({ isActive }) =>
                        isActive ? 'text-yellow-300' : 'text-white'
                    }
                >
                    Weather Card
                </NavLink>

                {user ? (
                    <>
                        <span className="text-white">
                            {user.email}
                        </span>
                        <button
                            onClick={logOut}
                            className="text-white hover:text-yellow-300"
                        >
                            Logout
                        </button>
                    </>
                ) : (
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
