import './movie-poster.css'

function MoviePoster(props){
    return(
        <div className='movie-poster'>
            <img src={props.poster}></img>
        </div>
    );
}

export default MoviePoster;