import * as React from 'react';
import { Route, Switch } from 'react-router-dom'


import '../styles/index.scss'

import { Home } from '@components/Home/Home.jsx'
import { Neural } from '@components/Neural/Neural.jsx'
import { Services } from '@components/Services/Services.jsx'
import { Header } from '@components/Header/Header.jsx'


export class Master extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Route path="/" component={Services} />
                <Route path="/qwerty1" component={Services} />
            </div>
        )
    }
}
