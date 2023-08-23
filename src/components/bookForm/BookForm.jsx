import React, { useState } from 'react';
import './BookForm.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
    setAuthor('');
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
          <input
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="book__form__input"
          />
          <input
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
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

export default BookForm;
