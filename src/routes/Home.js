import axios from 'axios';
import React from 'react';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    moives: []
  };
  
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    this.setState({movies: movies, isLoading: false});  //객체의 키와 변수의 이름이 같으면 축약 가능 ({movies}); 로
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;
    return (
    <section className='container'>
      {isLoading ? (
        <div className = 'loader'>
          <span className='loader__text'>Loading</span>
          </div>
      ) : (
        <div className='movies'>
          {movies.map(movie => (
          <Movie 
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            genres={movie.genres}
            language={movie.language}
            rating={movie.rating}
            runtime={movie.runtime}
            />
        ))}
        </div>
    )}
    </section>
    );
  }
}

export default Home;
