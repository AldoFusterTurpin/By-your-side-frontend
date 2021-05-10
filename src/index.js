import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import store from './store';
// import App from './components/App';
import reset from './constants/css/reset';
import NavigationBar from './components/navBar/navbar';

import "bootstrap/dist/css/bootstrap.css";

const GlobalStyle = createGlobalStyle`${reset}`;

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <NavigationBar />
            </Provider>
            <GlobalStyle />
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);