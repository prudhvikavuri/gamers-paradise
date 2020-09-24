import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Games from './Games';
import Developers from './Developers';
//can rename stander libraries as below
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/" exact component= {Home}/>
      <Route path="/about" component= {About}/>
      <Route path="/games" exact component= {Games} />
      <Route path="/games/:id" component= {Developers} />
      </Switch>
    </div> 
    </Router>
  );
}

const Home = () => (

  <div className ="homePage">
    <h1 className ="pageHeading">Explore Video Games Database API</h1>
    <h3 className ="pageSubHeading">The largest open video games database</h3>
    <div>
    <p className ="pagePara">
    There are two types of companies: hoarders and givers. Gamer's Paradise is the largest video game database and game discovery service. And we are gladly sharing our 350,000+ games, search, and machine learning recommendations with the world. Learn what the RAWG games database API can do and build something cool with it!
    </p>
    <img src="gp_homepage.jpg" alt="" className ="homePage_img"/>
    <p className ="pagePara">
      Think you have what it takes to place on the Gamers Paradise Hi-Score board? Drop on by and show us your moves! Play your way to the top for Most GP Points, Most Recent, Most Hi-Scores, and Most Unbeatable! Suggest your own challenges and see who's got the skills to beat them!
    </p>
    </div>
    <div>
      <h3 className ="pageSubHeading">Looking to play for free?</h3>
      <p className ="pagePara">We have a lot of games that need to be tested from every type of system like PlayStation 2, Xbox One, NES, Xbox 360, Genesis, Nintendo Wii and any other system you can think of. We’re looking for people to test these games to make sure they’re working.</p>
      <p className ="pagePara">You’ll be able to play a bunch of different games that you might have never played or even heard of from genres like Action/Adventure, RPG’s, Racing, Sports and any other genre in between.</p>
      <p className ="pagePara">Test games at your local Gamers Paradise and play for free!</p>
      <img src="playfree.jpeg" alt="" className ="homePage_img2"/>
    </div>
</div>
);


export default App;
