import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-info'>
            <div className="header">
                <a href="/business" className="logo">Business Entrepreneurship</a>
                <nav>
                    <a href="/home">Home</a>
                    <a href="/business">Businessman's Info</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/feedback">Feedback</a>
                </nav>
            </div>
            <div className="header-details">
                <h2>As you are reading this, you probably already have names popping into  your head as to who will appear on the richest list. Let’s find out.</h2>
                <h1>Total Budget : 1000 Million</h1>
            </div>
        </div>
    );
};

export default Header;