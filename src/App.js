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
        recipes={<NavLink to="/recipes">Recipes</NavLink>}
        add={<NavLink to="/add">Add new recipe</NavLink>}
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
    </BrowserRouter>
  );
}

export default App;
