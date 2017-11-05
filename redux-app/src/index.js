import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import actions from './actions/constants';
import './index.css';
import App from './components/App'
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker'

console.log(store);

ReactDOM.render(
    <Provider store={store}>
    <div>
        <Header/>
        <App/>
    </div>
        
    </Provider>, document.getElementById('root'));
registerServiceWorker();

store.subscribe(() => {
    console.log(store.getState());
});
