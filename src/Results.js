import React from 'react';
import style from './results.module.css';
//this allows me to link to another page
import { Link } from 'react-router-dom';

const Results =({name, releasedDt, image, rating, ratingCount, genres, id }) => {
    return(
        <div className ={style.result}>
            <div>
            <h3>{name}</h3>
            </div>
            <div className ={style.details}>            
            <img src={image} alt="" className ={style.image}/>
            <p>Released Date : {releasedDt}</p>
            <p>Rating : {rating}</p>
            <p>Number of Ratings : {ratingCount}</p>
            <h4>Genre</h4>
            <ul>
                {genres.map(genre =>(
                    //<li key ={Math.random()}>{genre.name}</li>
                   <p key={Math.random()}> {genre.name}</p>
                ))}
            </ul>
            <p key ={id}>
                <Link to={`/games/${id}`}>List Developers</Link>
            </p>
            </div>
        </div>
    );
};

export default Results;