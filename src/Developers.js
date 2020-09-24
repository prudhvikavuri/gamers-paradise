import React, {useState, useEffect} from 'react';
import DeveloperDetails from './DeveloperDetails';
import './App.css';

function Developers({ match }) {
//match is a set  of values we are receiving as props from where this link is being called.
  const [developers, setDevelopers] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchitems = async () => {
      //to pass parameter in a hyper link it has to be in ``, else  ''
    const response = await fetch(`https://api.rawg.io/api/games/${match.params.id}/development-team`)
    const data = await response.json();
    setDevelopers(data.results);
    console.log(data.results);
    console.log(developers.length);
    if((data.results).length === 0){
      setMessage("No Developers Listed!");
    }
}
fetchitems();
// eslint-disable-next-line
}, [match]);

//name, image, gameCount, topGames, positions
  return (
    <div className = "developers">
        <h1  className ="pageHeading">Game Developers!</h1>
        <h3  className ="pageHeading">{message}</h3>
        <div className ="results">
        {developers.map(developer =>(
          <DeveloperDetails key ={developer.id} 
          name ={developer.name}
          image = {developer.image}
          gameCount = {developer.games_count}
          topGames= {developer.games}
          positions = {developer.positions}/>
        ))}</div>
    </div>
  );
}

export default Developers;
