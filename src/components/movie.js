import '../App.css';

 function Movie({movieName, picture}) {
    return (
      <div className="movie">
        <div className="movie-name">Movie: {movieName}</div>
        <img className="picture" src={picture} alt={movieName}/>
      </div>
    );
  }
  
  export default Movie;