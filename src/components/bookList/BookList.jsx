import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import './BookList.css';

function BookList({ books, deleteBook }) {
  if (books.length === 0) {
    return <h2 className="bookList__message">There isn&lsquo;t Book yet...</h2>;
  }
  return (
    <section className="bookCard__section">
      <article className="bookCard__section__container">
        {books.map((book) => (
          <BookCard key={book.id} book={book} deleteBook={deleteBook} />
        ))}
      </article>
    </section>
  );
}

BookList.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default BookList;
