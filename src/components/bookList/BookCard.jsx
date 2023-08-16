import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies

function BookCard({ book, deleteBook }) {
  return (
    <div className="bookCard">
      <h2 className="bookCard__title">{book.title}</h2>
      <button
        type="button"
        onClick={() => deleteBook(book.id)}
        className="buttonCard__deleteBtn"
      >
        Delete
      </button>
    </div>
  );
}

BookCard.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookCard;
