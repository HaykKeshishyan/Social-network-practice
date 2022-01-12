import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/States';
import App from './App'
import './index.css';

export let reRenderEntire = (state) => {
    ReactDOM.render(
        <App state={state}
            dispatchProfile={store.dispatchProfile.bind(store)}
            dispatchDialogs={store.dispatchDialogs.bind(store)} />,
        document.getElementById('root')
    );
}




reRenderEntire(store.getState());

store.subscribe(reRenderEntire);