import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import Add from './pages/Add';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header
        home={<NavLink to="/">Home</NavLink>}
        recipes={<NavLink to="/pages/recipes">Recipes</NavLink>}
        add={<NavLink to="/pages/add">Add new recipe</NavLink>}
      />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/pages/recipes" element={
            <Recipes />
          } />
          <Route path="/pages/recipe" element={
            <Recipe />
          } />
          <Route path="/pages/add" element={
            <Add />
          } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
