import React from 'react'
import ReactDOM from 'react-dom'

import {JournalApp} from "./JournalApp";
import './assets/sass/index.scss';

ReactDOM.render(
    <React.StrictMode>
        <JournalApp/>
    </React.StrictMode>,
    document.getElementById('root')
)
