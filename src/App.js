import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutView from './Components/AboutView';
import SearchView from './Components/SearchView';
import MovieView from './Components/MovieView';
import Footer from './Components/Footer'
import Features from './Components/Features'


function NotFound404() {
  return <h1>not NotFound404</h1>;
}

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutView} />
        <Route path="/features" component={Features}/>
        <Route path="/search" render={() => <SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" component={MovieView} />
        <Route component={NotFound404} /> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

