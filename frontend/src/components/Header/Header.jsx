import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <header className="bg-[#2e2157] p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
            {/* Logo */}
            <div className="text-[#7e60bf] text-xl font-bold">
                <Link to="/">Forecasted Fashion</Link>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-4">
                <NavLink
                    to="/card"
                    className={({ isActive }) =>
                        isActive ? 'text-[#7e60bf]' : 'text-white hover:text-[#7e60bf]'
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
                            className="text-white hover:text-[#7e60bf]"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/signup"
                            className={({ isActive }) =>
                                isActive ? 'text-[#7e60bf]' : 'text-white hover:text-[#7e60bf]'
                            }
                        >
                            Sign Up
                        </NavLink>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? 'text-[#7e60bf]' : 'text-white hover:text-[#7e60bf]'
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
