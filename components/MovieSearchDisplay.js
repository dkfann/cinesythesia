import React from 'react';
import styles from '../styles/movieSearch.css';
import { StyleSheet, css } from 'aphrodite';

const MovieSearchDisplay = ({ movieSearchData }) => {
    function getImageFromUrl(url) {
        if (!url) return;

        return `https://image.tmdb.org/t/p/w500${url}`;
    }
    function getGenresFromGenreList(genreList) {
        // The genre list has all possible genres, but only the first few will
        // be defined. We take these ids and return back what the actual genres are.
        const movieGenres = [];
        const genreHash = {
            28: 'Action',
            12: 'Adventure',
            16: 'Animation',
            35: 'Comedy',
            80: 'Crime',
            99: 'Documentary',
            18: 'Drama',
            10751: 'Family',
            14: 'Fantasy',
            36: 'History',
            27: 'Horror',
            10402: 'Music',
            9648: 'Mystery',
            10749: 'Romance',
            878: 'Science Fiction',
            10770: 'TV Movie',
            53: 'Thriller',
            10752: 'War',
            37: 'Western',
        };

        genreList.forEach(genre => {
            if (!genre) return;
            
            if (genreHash[genre]) {
                movieGenres.push(genreHash[genre]);
            }
        });

        return movieGenres;
    }
    function getReleaseYear(releaseData) {
        // The release year comes in a string of format YYYY-MM-DD
        // We only want the year, so just grab the first piece of data delimited by '-'
        return releaseData.split('-')[0];
    }
    function getMovieGroupsToRender() {
        const groupsToRender = [];
        let childrenToAddToGroup = [];
        for (let index = 0; index < movieSearchData.length; index++) {
            if (childrenToAddToGroup.length == 4 || index == movieSearchData.length - 1) {
                while (childrenToAddToGroup.length < 4) {
                    childrenToAddToGroup.push(
                        <div className={ `${styles.movie} ${styles.invisible} card` } key={`hidden-${index++}`}>
                        </div>
                    );
                }
                groupsToRender.push(
                    <div className={ styles.movieGroup } key={`group-${index}`}>
                        { childrenToAddToGroup }
                    </div>
                );
                childrenToAddToGroup = [];
            }
            else {
                if (movieSearchData[index].backdrop_path) {
                    childrenToAddToGroup.push(
                        <div className={`${styles.movie} card`} key={index}>
                            <div className="c-movie-search__poster">
                                <img className={ styles.moviePoster } src={getImageFromUrl(movieSearchData[index].backdrop_path)} alt=""/>
                            </div>
                            <div className={ styles.metadata }>
                                <div className={ styles.title }>{ movieSearchData[index].title }</div>
                                <div className={ styles.releaseDate }>{ getReleaseYear(movieSearchData[index].release_date)}</div>
                            </div>
                        </div>
                    );
                }
            }
        }

        return groupsToRender;
    }
    return (
        <div className={ styles.display }>
            { getMovieGroupsToRender() }
        </div>
    )
};

export default MovieSearchDisplay;