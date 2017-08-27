import React from 'react';
import Home from '../components/Home';
import SearchContainer from './SearchContainer';
import HomeStyles from '../styles/HomeStyles';
import DevTools from 'mobx-react-devtools';
import MovieSearchDisplay from '../components/MovieSearchDisplay';
import searchStore from '../stores/searchStore';
import { observer } from 'mobx-react';

@observer
export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="o-home-container" style={ HomeStyles.container }>
                <Home/>
                <SearchContainer/>
                <MovieSearchDisplay
                    movieSearchData={searchStore.movieSearchData}
                />
                <DevTools />
            </div>
        )
    }
}