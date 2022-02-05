import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{
 state = {
   isLoading: true,
   movies : [],
 };

  getMovies = async() => {//async() 비동기
    const {
      data :{
        data : { movies },  
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');//axios로 API호출  
    this.setState({movies, isLoading: false});//ES6에서는 키와 변수가 동일하면 축약가능.
  }

 componentDidMount(){
   this.getMovies();
 }

 render(){
  const { isLoading, movies } = this.state; 
  return <section className="container">
    {isLoading ? (
    <div className="loader">
      <span className="loader__text">'Loading...'</span>
    </div>
    ) : ( 
    <div className="movies">
     {movies.map((movie) => (
     <Movie 
      key={movie.id}
      id={movie.id}
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}//이름이 다른 이유 : 노마드코더영화API에서 정의한 것
      genres={movie.genres}
    />
    ))}
    </div>
    //여기서 Movie 컴포넌트 실행할거임.
    //render()함수가 실행됨. 
    //Movie 컴포넌트를 임포트 했으나, 해당 값이 읽히지 않는 이유는, 정의한 props를 전달하고 있지 않으므로 실행이 안되었던 것임.
  )}</section>;
 }
}  

export default Home;
