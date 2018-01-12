import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  state = {
    greeting: "hello",
    movies: [
      {
        title: "iron man 1",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
      },
      {
        title: "iron man 2",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_UY1200_CR89,0,630,1200_AL_.jpg",
      },
      {
        title: "iron man 3",
        poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzMjEzMjY1M15BMl5BanBnXkFtZTcwNTMxOTYyOQ@@._V1_UY1200_CR105,0,630,1200_AL_.jpg",
      },
    ]
  }

  componentWillMount(){
    console.log("will mount");
  }

  componentDidMount(){
    console.log("did mount");
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "iron man 4",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
          }
        ]
      })
    },2000 )
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
