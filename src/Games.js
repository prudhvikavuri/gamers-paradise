import React, {useState, useEffect} from 'react';
import Results from './Results';
import './App.css';

function Games() {

const [results, setResults] = useState([]);
const [page, setPage] = useState(1);
//if you leave the second parameter as [] - effect only happens on page refresh
useEffect(() => {
    const fetchitems = async () => {
      //to pass parameter in a hyper link it has to be in ``, else  ''
    const response = await fetch(`https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&ordering=-rating&page=${page}`)
    const data = await response.json();
    setResults(data.results);
    console.log(data.results);
}
fetchitems();
}, [page]);

const nextPage = e =>{
  //button click increments page
  e.preventDefault();
  setPage(page+1);
}
const previousPage = e =>{
  //button click decrements page
  e.preventDefault();
  setPage(page-1);
}
const firstPage = e =>{
  //button click decrements page
  e.preventDefault();
  setPage(1);
}
//{name, releasedDt, image, rating, ratingCount, genres, nextPage}
  return (
    <div className = "Games">
        <h1 className ="pageHeading">Top Rated Games</h1>
        <button className="button" type="submit" onClick={firstPage}>
          First Page
        </button>
        <button className="button" type="submit" onClick={previousPage}>
          Previous Page ({page-1})
        </button>
        <button className="button" type="submit" onClick={nextPage}>
          Next Page ({page+1})
        </button>
    <div className = "results">
    {results.map(result =>(
      <Results key ={result.id} 
      name ={result.name}
      releasedDt = {result.released}
      image={result.background_image}
      rating={result.rating}
      ratingCount={result.ratings_count}
      genres={result.genres}
      id={result.id}/>
    ))}
    </div>
    </div>
  );
}
export default Games;
