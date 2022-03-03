import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {
  const APP_ID = process.env.React_App_ID;
  const APP_KEY = process.env.React_App_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input onChange={updateSearch} className="search-bar" type="text" value={search} />
        <button className="search-button" type="submit">Submit</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => {
          return <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        })}
      </div>
    </div>
  );
}

export default App;
