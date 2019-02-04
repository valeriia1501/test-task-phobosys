import * as React from 'react';
import ReactDOM from 'react-dom'
import { Master } from '@components/master.jsx'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
    <Router>
        <Master />
    </Router>
    ,
    document.getElementById('root')
)
