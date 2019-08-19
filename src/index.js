import './main.css'
import './media.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {syncHistoryWithStore} from 'react-router-redux'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Goods from 'containers/goods'
import Good from 'containers/good'
import Basket from 'containers/basket'
import Delivery from 'containers/delivery'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Goods} />
                <Route path='categories/:id' component={Goods} />
            </Route>
            <Route path='goods/:id' component={Good} />
            <Route path='/basket' component={Basket} />
            <Route path='/delivery' component={Delivery} />
        </Router>
    </Provider>,
    document.getElementById('root')
);