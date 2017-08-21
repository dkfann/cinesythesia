import React from 'react';
import SearchStyles from '../styles/SearchStyles';

const Search = ({ searchQuery, handleSearchQueryChange }) => {
    return (
        <div className="c-movie-search" style={ SearchStyles.container }>
            <div className="c-movie-search__label" style={ SearchStyles.label }>Search For A Movie:</div>
            <input
                type="text"
                value={ searchQuery }
                onChange={ handleSearchQueryChange }
            />
            <button
                type="button"
                className="btn btn-primary"
                style={ SearchStyles.button }
            >
                Search
            </button>
        </div>
    )
};

export default Search;