import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import logoLight from '../assets/logo-light.png'
import logoDark from '../assets/logo-dark.png'

const Navbar = () => {
    const { darkMode, toggleTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    <img
                        src={darkMode ? logoDark : logoLight}
                        alt="Logo"
                        className="nav-logo-img"
                    />
                </NavLink>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        onClick={() => setMenuOpen(false)}
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/cv"
                        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                        onClick={() => setMenuOpen(false)}
                    >
                        CV
                    </NavLink>

                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
