import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

function BookCard({
  title, author, category, id,
}) {
  const [progress, setProgress] = useState(0);
  const [chapter, setChapter] = useState(1);
  const dispatch = useDispatch();
  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };
  const handleClick = () => {
    setProgress(progress + 10);
    setChapter(chapter + 1);
  };
  const handleReset = () => {
    setProgress(0);
    setChapter(1);
  };

  return (
    <div className="bookCard__container">
      <div className="bookCard">
        <div className="bookCard__features">
          <p className="bookCard__category">{category}</p>
          <h2 className="bookCard__title">{title}</h2>
          <p className="bookCard__author">{author}</p>
          <div className="buttonContainer">
            <button type="button" className="buttonCard">
              Comments
            </button>
            <span className="bookCard__bar">|</span>
            <button
              type="button"
              onClick={() => handleDelete(id)}
              className="buttonCard"
            >
              Remove
            </button>
            <span className="bookCard__bar">|</span>
            <button type="button" className="buttonCard">
              Edit
            </button>
          </div>
        </div>
        <div className="bookCard__progress__container">
          <svg className="bookCard__progress__circleContainer">
            <circle className="bookCard__progress__circle" cx="60" cy="60" r="40" />
            <circle className="bookCard__progress__circleComplete" style={{ strokeDashoffset: `calc(260 - (260 * ${progress})/100)` }} cx="60" cy="60" r="40" />
          </svg>
          <div className="bookCard__progress__right">
            <h2 className="bookCard__progress">
              {progress}
              %
            </h2>
            <p className="bookCard__completed">completed</p>
          </div>
        </div>
      </div>
      <div className="bookCard__chapter__container">
        <h2 className="bookCard__currentChapter">CURRENT CHAPTER</h2>
        <p className="boockCard__chapter">
          Chapter
          {' '}
          {chapter}
        </p>
        {progress === 100 ? (
          <button className="chapter__btn" type="button" onClick={handleReset}>
            Reset Progress
          </button>
        ) : (
          <button className="chapter__btn" type="button" onClick={handleClick}>
            Update Progress
          </button>
        )}
      </div>
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
