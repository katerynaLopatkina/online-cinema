import MovieCard from "./movie-card/movie-card";
import './movie.css'

export default function Movie (props){

    if(props.movies == undefined) return

    return(
        <div className="all-movies fixed-container">
            {props.movies.map((movie => <MovieCard key={movie.imdbID} {...movie}/>))} 
        </div>
    )
}