import React, {useEffect, useState} from 'react';
import Reciepe from './Reciepe'
import "./App.css"



const App = () => {

  
  const APP_KEY = "818d474c7e28afda0024fe8478afd2f3"	
  const APP_ID = "d1d1fbcc"


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken')
useEffect(()=>{
  getRecepies()
},[query])



  const getRecepies = async () => {
    const response = await fetch( 
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault ();
    setQuery(search)
  }



  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form' >
        <input type="text" className='search-bar' value={search} onChange={updateSearch}/>
        <button type="submit" className='search-button'>
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => 
        <Reciepe
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
         img = {recipe.recipe.image} 
         ingredients={recipe.recipe.ingredients}
         />
          )}
      </div>
    </div>
  )
}

export default App;
