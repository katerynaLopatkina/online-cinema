import './movie-name.css'

function MovieName(props){
    return(
        <div className='name'>
            <h3>{props.name}</h3>
        </div>
    );
}

export default MovieName;