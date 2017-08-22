import React from 'react';
import Search from '../components/Search';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { searchStore } from '../stores/searchStore';

@observer class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    }
    handleSearchQueryChange(event) {
        const query = event.target.value;
        searchStore.newQuery(query);
    }
    render() {
        return (
            <Search
                searchQuery={searchStore.query}
                handleSearchQueryChange={ this.handleSearchQueryChange }
                handleSearchQuerySubmit={ (event) => { console.log(searchStore.query); } }
            />
        )
    }
}

export default SearchContainer;