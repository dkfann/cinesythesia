import React from 'react';
import SearchStyles from '../styles/SearchStyles';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const Search = ({ searchQuery, handleSearchQueryChange, handleSearchQuerySubmit }) => {
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
                onClick={ handleSearchQuerySubmit }
            >
                Search
            </button>
        </div>
    )
};

export default Search;