import React, { useEffect, useState } from "react";
import API from "../api";
export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.get("/books");
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Book List</h2>
      <ul>{books.map((book) => <li key={book._id}>{book.title}</li>)}</ul>
    </div>
  );
}