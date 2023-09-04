import MovieName from "./movie-name";
import MovieTypeAndYear from "./movie-type-year";
import MoviePoster from "./movie-poster";
import './movie-card.css';

function MovieCard(props){
    console.log(props)
    return(
        <div className="card">
            <MoviePoster poster={props.Poster}/>
            <MovieName name={props.Title}/>
            <MovieTypeAndYear type={props.Type} year={props.Year}/> 
        </div>
    );
}

export default MovieCard;