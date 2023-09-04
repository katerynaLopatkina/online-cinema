import './movie-type-year.css'

function MovieTypeAndYear(props){
    return(
        <div className="type-year">
            <p>{props.type}</p>
            <p>{props.year}</p>
        </div>
        
    );
}

export default MovieTypeAndYear;