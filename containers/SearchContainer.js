import React from 'react';
import Search from '../components/Search';

export default class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
        };

        this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    }
    handleSearchQueryChange(event) {
        this.setState({
            searchQuery: event.target.value,
        });
    }
    render() {
        return (
            <Search
                searchQuery={this.state.searchQuery}
                handleSearchQueryChange={this.handleSearchQueryChange}
            />
        )
    }
}