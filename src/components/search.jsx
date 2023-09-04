import React from 'react';
import './search.css'
import'./filter.css'

class Search extends React.Component{
    state={
        search: '',
        type:'all',
    }

    handleKey =(event) =>{
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search);
        }
    }

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render(){
        return(
            <div>
                <div className="search">
                    <input 
                        placeholder="Find your favorite movie..." 
                        type="search"
                        value={this.state.search}
                        onChange={ (event) =>  this.setState({ search: event.target.value }) }
                        onKeyDown={this.handleKey}>
                    </input>
                    <img src="../search.png"></img>
                </div>

                <div className='filter'>
                    <input 
                        type="radio" 
                        name="movie-type" 
                        id="filter-all" 
                        data-type='all' 
                        checked={this.state.type === 'all'}
                        onChange={this.handleFilter}>
                    </input>
                    <label for="filter-all"> All</label>

                    <input 
                        type="radio" 
                        name="movie-type" 
                        id="filter-movies" 
                        data-type='movie' 
                        checked={this.state.type === 'movie'}
                        onChange={this.handleFilter}>
                    </input>
                    <label for="filter-movies"> Only movies</label>

                    <input 
                        type="radio" 
                        name="movie-type" 
                        id="filter-series" 
                        data-type='series' 
                        checked={this.state.type === 'series'} 
                        onChange={this.handleFilter}> 
                    </input>
                    <label for="filter-series"> Only series</label>
                </div>
            </div>
        );
    } 
}

export default Search;