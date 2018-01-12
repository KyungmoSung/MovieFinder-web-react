import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

const movies = [
  "iron man 1",
  "iron man 2",
  "iron man 3",
]

const moviePosters = [
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_UY1200_CR89,0,630,1200_AL_.jpg",
  "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzMjEzMjY1M15BMl5BanBnXkFtZTcwNTMxOTYyOQ@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]} poster={moviePosters[0]} />
        <Movie title={movies[1]} poster={moviePosters[1]} />
        <Movie title={movies[2]} poster={moviePosters[2]} />
      </div>
    );
  }
}

export default App;
