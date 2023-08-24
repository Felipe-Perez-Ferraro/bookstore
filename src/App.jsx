import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';

function App() {
  const [activeLink, setActiveLink] = useState('home');
  const handleClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setActiveLink('books');
    } else if (path === '/categories') {
      setActiveLink('categories');
    }
  }, []);

  return (
    <Router>
      <section className="header__section">
        <header className="header__section__container">
          <nav className="header__navbar__container">
            <ul className="header__links__container">
              <h1 className="header__title">Bookstore CMS</h1>
              <Link
                to="/"
                className={
                  activeLink === 'books' ? 'activeLink' : 'header__link__item'
                }
                onClick={() => handleClick('books')}
              >
                Books
              </Link>
              <Link
                to="categories"
                className={
                  activeLink === 'categories'
                    ? 'activeLink'
                    : 'header__link__item'
                }
                onClick={() => handleClick('categories')}
              >
                Categories
              </Link>
            </ul>
          </nav>
        </header>
      </section>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="categories" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
