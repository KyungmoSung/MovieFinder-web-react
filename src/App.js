import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class App extends Component {

  state = {
  }
  handleChange = (selectedOption) => {
    this.setState({ 
      selectedOption,
      movies: null,
     });
    this._getMovies(selectedOption ? selectedOption.value : 'rating');
  }

  componentDidMount() {
    this._getMovies('rating');
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
      title={movie.title} 
      poster={movie.medium_cover_image} 
      genres={movie.genres} 
      synopsis={movie.synopsis}
      rating={movie.rating}
      year={movie.year}
      key={movie.id} />
    })
    return movies;
  };

  _renderSort = () => {
  	const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;
    
    return <Select
    name="form-field-name"
    value={value}
    onChange={this.handleChange}
    options={[
    { value: 'rating', label: 'rating' },
    { value: 'download_count', label: 'download_count' },
    { value: 'like_count', label: 'like_count' },
    { value: 'date_added', label: 'date_added' },
    { value: 'title', label: 'title' },
    { value: 'year', label: 'year' },
    ]}
    />

  }
  
  _getMovies = async (sort) => {
    const movies = await this._callApi(sort)
    this.setState({
      movies
    })
  }

  _callApi = (sort) => {
    console.log(sort)
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by='+ sort)
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    console.log(movies)
    return(
      <div className={movies ? "App" : "App--loading"}>
        <div className="Search__Column">
          {movies ? this._renderSort() : ''}
        </div>
        <div className="Result__Column">
          {movies ? this._renderMovies() : 'Loading'}
        </div>
      </div>
    );
  }
}

export default App;
 