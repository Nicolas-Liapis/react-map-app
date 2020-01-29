import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <Home /> 
    </ReduxProvider>,
document.getElementById('root')
);
