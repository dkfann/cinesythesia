import { observable, computed, action } from 'mobx';

class SearchStore {
    @observable query;

    constructor(query = 'test') {
        this.query = query;
    }
    @computed get currentQuery() {
        return this.query;
    }
    @action newQuery = (query) => {
        this.query = query;
    }
}

const searchStore = new SearchStore();

export default searchStore;
export { searchStore };