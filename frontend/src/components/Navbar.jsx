
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', margin: '0 1rem' }}>Home</Link>
      <div>
        <Link to="/books" style={{ color: '#fff', margin: '0 1rem' }}>Book List</Link>
        <Link to="/add" style={{ color: '#fff', margin: '0 1rem' }}>Add Book</Link>
        <Link to="/signin" style={{ color: '#fff', margin: '0 1rem' }}>Sign In</Link>
        <Link to="/signup" style={{ color: '#fff', margin: '0 1rem' }}>Sign Up</Link>
        <Link to="/profile" style={{ color: '#fff', margin: '0 1rem' }}>Profile</Link>
      </div>
    </nav>
  );
}
