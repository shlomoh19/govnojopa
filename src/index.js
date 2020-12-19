import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import './i18n'

const rootElement = document.getElementById('root')

const routes =
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>

render(routes, rootElement);

