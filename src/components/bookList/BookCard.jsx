import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

function BookCard({
  title, author, category, id,
}) {
  const dispatch = useDispatch();
  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="bookCard">
      <h2 className="bookCard__title">{title}</h2>
      <p className="bookCard__author">
        <span className="bookCard__bold">
          Author:
        </span>
        {' '}
        {author}
      </p>
      <p className="bookCard__category">
        <span className="bookCard__bold">
          Category:
        </span>
        {' '}
        {category}
      </p>
      <button
        type="button"
        onClick={() => handleDelete(id)}
        className="buttonCard__deleteBtn"
      >
        Delete
      </button>
    </div>
  );
}

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookCard;
