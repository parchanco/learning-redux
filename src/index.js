import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

const actionIncrement = {
    type: '@counter/incremented'
}

const actionDecremented = {
    type: '@counter/decremented'
}
const actionReseted = {
    type: '@counter/reseted'
}

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case '@counter/incremented':
            return state + 1;
        case '@counter/decremented':
            return state - 1;
        case '@counter/reseted':
            return 0;
        default:
            return state //or throw error
    }
}

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const App = () => {
    return (
        <div>
            <div>
                {store.getState()}
            </div>
            <button onClick={() => store.dispatch(actionIncrement)}>+</button>
            <button onClick={() => store.dispatch(actionDecremented)}>-</button>
            <button onClick={() => store.dispatch(actionReseted)}>Reset</button>

        </div>
    )
}
const renderApp = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}
// 1 tieme called
renderApp()
// each time the app changes is called
store.subscribe(renderApp)