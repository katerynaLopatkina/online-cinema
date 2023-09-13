import React, { useState } from 'react';
import './search.css'
import'./filter.css'

const Search = ({searchMovies}) =>{
    const [search,setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) =>{
        if(event.key === 'Enter'){
            searchMovies(search);
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    };

        return(
            <div>
                <div className="search">
                    <input 
                        placeholder="Find your favorite movie..." 
                        type="search"
                        value={search}
                        onChange={ (event) =>  setSearch(event.target.value) }
                        onKeyDown={handleKey}>
                    </input>
                    
                </div>

                <div className='filter'>
                    <input 
                        type="radio" 
                        name="movie-type" 
                        id="filter-all" 
                        data-type='all' 
                        checked={type === 'all'}
                        onChange={handleFilter}>
                    </input>
                    <label for="filter-all"> All</label>

                    <input 
                        type="radio" 
                        name="movie-type" 
                        id="filter-movies" 
                        data-type='movie' 
                        checked={type === 'movie'}
                        onChange={handleFilter}>
                    </input>
                    <label for="filter-movies"> Only movies</label>

                    <input 
                        type="radio" 
                        name="movie-type" 
                        id="filter-series" 
                        data-type='series' 
                        checked={type === 'series'} 
                        onChange={handleFilter}> 
                    </input>
                    <label for="filter-series"> Only series</label>
                </div>
            </div>
        );
}

export default Search;