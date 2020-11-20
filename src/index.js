import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import './i18n'
import Spinner from "./components/spinner/Spinner";

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

