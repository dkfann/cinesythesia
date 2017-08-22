# Notes While Developing

## Step 1: Scaffolding

Pull my React boilerplate code from https://github.com/dkfann/ReactAppSetup. This gets me an easy setup with Webpack with Webpack Dev Server and a basic file structure.

### Adding MobX

Followed some basic code seen from: https://www.robinwieruch.de/mobx-react/#dependencies
Although it's intended to show Redux refactoring, it's been useful for just seeing a basic connection between the MobX store and the component.

Link to repo that may be helpful later: https://github.com/rwieruch/react-mobx-soundcloud/blob/master/src/stores/trackStore.js

Some general MobX observations:

Will need the .babelrc to look like this:

```
{
    'presets': [
        'react',
        "es2015",
        "stage-2"
    ],
    "plugins": ["transform-decorators-legacy", "transform-class-properties"]
}
```

I believe `"transform-decorators-legacy"` needs to be first in the plugins array.

## Store Creation

A basic store could look something like this:

```js
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
```

Things to note:
* Have to import the decorators from `mobx`
* Use `@observable` to indicate the that variable needs to be observed for changes
* Use `@computed` to derive data from the state. In this case it's basically just returning the state. Has to be used on a getter (?)
* Use `@action` to perform a change on the state

This setup is used for an input. When the input changes (onChange), it will fire `newQuery`. When you submit the input, it will log out `searchStore.query`, which runs the getter, which will run the computed method.