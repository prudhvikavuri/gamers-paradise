import React from 'react';
import style from './developers.module.css';
import './App.css';

const DeveloperDetails =({name, image, gameCount, topGames, positions}) => {

    return(
        <div className ={style.developer}>
            <h3>{name}</h3>
            <img src={image} alt="" className ={style.image}/>
            <p>Number of Games : {gameCount}</p>
            <h4>Top Games : </h4>
            <ul>
                {topGames.map(game =>(
                   <p key={Math.random()}> {game.name}</p>
                ))}
            </ul>
            <h4>Positions : </h4>
            <ul>
                {positions.map(position =>(
                   <p key={Math.random()}> {position.name}</p>
                ))}
            </ul>
        </div>
    );
};

export default DeveloperDetails;
