import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import Add from './pages/Add';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header
        home={<NavLink to="/" aria-label="Home">Home</NavLink>}
        recipes={<NavLink to="/recipes" aria-label="Recipes">Recipes</NavLink>}
        add={<NavLink to="/add" aria-label="Add new recipe">Add new recipe</NavLink>}
      />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/recipes" element={
            <Recipes />
          } />
          <Route path="/recipe/:id" element={
            <Recipe />
          } />
          <Route path="/add" element={
            <Add />
          } />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
