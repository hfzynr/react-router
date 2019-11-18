import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav>
                <ul id="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/user">Users</Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}