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
      setActiveLink('home');
    } else if (path === '/categories') {
      setActiveLink('categories');
    }
  }, []);

  return (
    <Router>
      <section className="header__section">
        <header className="header__section__container">
          <h1 className="header__title">Bookstore</h1>
          <nav>
            <ul className="header__links__container">
              <Link
                to="/"
                className={
                  activeLink === 'home' ? 'activeLink' : 'header__link__item'
                }
                onClick={() => handleClick('home')}
              >
                Home
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
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;