import React from "react";
import Movie from "./movie";
import Search from "./search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Movies extends React.Component{

    state = {
        movies: [],
    }

    componentDidMount(){
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=harry+potter`)
        .then(response=>response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    searchMovies=(str, type='all')=>{
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response=>response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render(){
        return(
            <div >
                <Search searchMovies={this.searchMovies}/>
                <Movie movies={this.state.movies}/>
            </div>
        )
    }  
}

export default Movies;