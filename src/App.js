import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {

state = {
  isLoading: true,
  movies : []
};
getMovies = async () => {
  const {
    data : {
      data:{movies}
    }
  } = await axios.get(
    "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
  );  
  this.setState({movies, isLoading : false})
  console.log(movies)
}
// await는 async가 없으면 사용할 수 없다.

componentDidMount(){
  this.getMovies()
}

render(){
  const { isLoading, movies }= this.state;
  return( 
  <section className="container">
    {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
      ) : ( 
        <div className="movies">
          {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image} 
            />
          ))}
        </div>
        )}
      </section>
    );
  }
}
export default App;


// application을 mount(생겨날 떄)할 때, mount 되자마자 isLoading은 기본적으로 true다.

//처음에 render를 하면 호출되는 life cycle method는 무엇일까 -> componentDidMount

//fectch = axios axios 는 fetch위에 있는 작은 layer  axios는 땅콩위에 있는 초콜릿과 같다.