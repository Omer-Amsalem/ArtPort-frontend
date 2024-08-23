import React, { useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Header.css'; // Import CSS file for styling

const Header = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="header">
      {/* Left side - Logo */}
      <div className="logo">
        <h1>ArtPort</h1> {/* Replace with your logo */}
      </div>

      {/* Right side - Navigation */}
      <nav className="nav-menu">
        <ul>
          
          {/* Profile with dropdown */}
          <li className="profile">
            <a href="#!" onClick={toggleProfileMenu}>My Profile</a>
            {isProfileMenuOpen && (
              <ul className="profile-dropdown">
                <li><a href="/my-art">My Art</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><Link to="/login">Log out</Link></li>
              </ul>
            )}
          </li>
          <li><a href="/artists">Artists</a></li>
          <li><a href="/arts">Arts</a></li>
          <li className='searchIcon'><a href="/search"><IoSearchSharp /></a></li>
          <li className='cartIcon'><a href="/cart"><TiShoppingCart /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
