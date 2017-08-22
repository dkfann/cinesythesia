import jsonpPromise from 'jsonp-es6';

export default function movieApi({ tmdbApiKey, omdbApiKey }) {
    const TMDB_API_KEY = tmdbApiKey;
    const OMDB_API_KEY = omdbApiKey;

    const movieApi = {
        getMovieTitleQueryFromTMDBQuery(query) {
            return jsonpPromise(query)
                .then(resolve => {
                    return resolve;
                });
        },
    };

    return movieApi;
}
