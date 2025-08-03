import React, { useState } from 'react';
import axios from 'axios';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [ISBN, setISBN] = useState('');
  const [available, setAvailable] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/books', {
        title,
        author,
        ISBN,
        available,
      });
      setMessage('Book added successfully!');
      setTitle('');
      setAuthor('');
      setISBN('');
      setAvailable(true);
    } catch (err) {
      console.error(err);
      setMessage('❌ Error adding book.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Add a New Book</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={ISBN}
          onChange={(e) => setISBN(e.target.value)}
          required
        />
        <label style={{ textAlign: 'left' }}>
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />{' '}
          Available
        </label>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>
          Add Book
        </button>
        {message && <p style={{ textAlign: 'center', color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
      </form>
    </div>
  );
}
