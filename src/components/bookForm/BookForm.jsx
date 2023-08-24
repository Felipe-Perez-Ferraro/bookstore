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
        <h2 className="form__section__title">ADD NEW BOOK</h2>
        <form onSubmit={handleSubmit} className="book__form">
          <input
            type="text"
            placeholder="Add a Book"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="book__form__input"
            required
          />
          <input
            type="text"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="book__form__input"
            required
          />
          <select
            type="text"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="book__form__input"
            required
          >
            <option>Category</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Fiction">Fiction</option>
          </select>
          <button type="submit" className="book__form__button">
            Add Book
          </button>
        </form>
      </article>
    </section>
  );
}

export default BookForm;
