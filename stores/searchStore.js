import { observable, computed, action } from 'mobx';
import movieApi from '../util/movieApi';
import { TMDB_API_KEY, OMDB_API_KEY } from '../dev-private/apiKeys';

class SearchStore {
    @observable query;
    @observable movieData;

    constructor(query = 'test') {
        this.query = query;
        this.movieData = [];
    }
    @computed get currentQuery() {
        return this.query;
    }
    @action newQuery = (query) => {
        this.query = query;
    }
    @action searchTMDBforMovieByName = query => {
        const movieSearcher = movieApi({ tmdbApiKey: TMDB_API_KEY, omdbApiKey: OMDB_API_KEY });

        const movieQuery = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&vote_average.gte=8`;

        movieSearcher.getMovieTitleQueryFromTMDBQuery(movieQuery)
            .then(resolve => {
                this.movieData = resolve.results;
            });
    }

}

const searchStore = new SearchStore();

export default searchStore;
export { searchStore };
