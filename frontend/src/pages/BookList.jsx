import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/books');
        setBooks(res.data);
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: '50px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📚 Book List</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {books.map((book) => (
          <div
            key={book._id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '15px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>ISBN:</strong> {book.ISBN || 'N/A'}</p>
            <p><strong>Status:</strong> {book.available ? '✅ Available' : '❌ Unavailable'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
