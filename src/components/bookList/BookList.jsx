import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCard from './BookCard';
import './BookList.css';
import { fetchBooks } from '../../redux/books/booksSlice';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => Object.values(state.books).flat());

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (books.length === 0) {
    return <h2 className="bookList__message">There isn&lsquo;t Book yet...</h2>;
  }
  return (
    <section className="bookCard__section">
      <article className="bookCard__section__container">
        {Array.isArray(books) && books.map((book) => (
          <BookCard
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.item_id}
          />
        ))}
      </article>
    </section>
  );
}

export default BookList;
