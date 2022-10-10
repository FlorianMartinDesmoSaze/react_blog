// import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>The frog blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link id="new-blog" className="new-blog" to="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    )
}
