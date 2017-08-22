import React from 'react';
import Home from '../components/Home';
import SearchContainer from './SearchContainer';
import HomeStyles from '../styles/HomeStyles';
import DevTools from 'mobx-react-devtools';

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="o-home-container" style={ HomeStyles.container }>
                <Home/>
                <SearchContainer/>
                <DevTools />
            </div>
        )
    }
}