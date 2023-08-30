import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import userImg from './assets/user.png';
import './App.css';
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
            <h1 className="header__title">Bookstore CMS</h1>
            <ul className="header__links__container">
              <li>
                <Link
                  to="/"
                  className={
                    activeLink === 'books' ? 'activeLink' : 'header__link__item'
                  }
                  onClick={() => handleClick('books')}
                >
                  Books
                </Link>
              </li>
              <li>
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
              </li>
            </ul>
          </nav>
          <figcaption>
            <figure>
              <img className="header__userImg" src={userImg} alt="" />
            </figure>
          </figcaption>
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
