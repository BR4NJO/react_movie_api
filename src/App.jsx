import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieDetails';
import SearchResults from './pages/SearchResults';
import FavoritesPage from './pages/FavoritesPage'; 
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="logo">
            🎬 TMDB_API
        </Link>
        <Link to="/favorites" className="favorites-link">
          ❤️ Mes Favoris
        </Link>
      </nav>
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favorites" element={<FavoritesPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
