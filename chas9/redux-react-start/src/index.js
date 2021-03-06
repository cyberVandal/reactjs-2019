import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const ourStore = createStore(reducer);

ReactDOM.render(
    <Provider store={ourStore}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
