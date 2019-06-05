import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import * as serviceWorker from './serviceWorker';
// import authReducer from './store/reducers/authentication';
// import counterReducer from './store/reducers/counter';
// import storeCounter from './store/reducers/storeCounters';

const ourStore = createStore(reducer);

ReactDOM.render(
        <BrowserRouter>
        <Provider store={ourStore}>
        <App />
        </Provider>
        </BrowserRouter>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
