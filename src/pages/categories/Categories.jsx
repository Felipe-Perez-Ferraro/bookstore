import React, { useState } from 'react';
import BookForm from '../../components/bookForm/BookForm';
import BookList from '../../components/bookList/BookList';
import './Categories.css';

function Categories() {
  const [books, setBooks] = useState([]);
  const createBook = (book) => {
    setBooks([
      ...books,
      {
        title: book.title,
        id: books.length,
      },
    ]);
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <main className="main__section">
      <BookForm createBook={createBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </main>
  );
}

export default Categories;
