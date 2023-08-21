import { useDispatch, useSelector } from 'react-redux';
import BookForm from '../../components/bookForm/BookForm';
import BookList from '../../components/bookList/BookList';
import './Categories.css';
import { addBook, removeBook } from '../../redux/books/booksSlice';

function Categories() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const createBook = (book) => {
    dispatch(addBook(book));
  };

  const deleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <main className="main__section">
      <BookForm createBook={createBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </main>
  );
}

export default Categories;
