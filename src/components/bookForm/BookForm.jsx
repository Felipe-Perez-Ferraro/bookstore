import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

function BookForm({ createBook }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({
      title,
    });
    setTitle('');
  };

  return (
    <section className="form__section">
      <article className="form__section__container">
        <form onSubmit={handleSubmit} className="book__form">
          <input
            type="text"
            placeholder="Add a Book"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="book__form__input"
          />
          <button type="submit" className="book__form__button">
            Add
          </button>
        </form>
      </article>
    </section>
  );
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default BookForm;
