import BookForm from '../../components/bookForm/BookForm';
import BookList from '../../components/bookList/BookList';
import './Categories.css';

function Categories() {
  return (
    <main className="main__section">
      <BookList />
      <BookForm />
    </main>
  );
}

export default Categories;
