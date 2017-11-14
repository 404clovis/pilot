import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Main from './containers/Main'
import Queues from './pages/Queues'
import Orders from './pages/Orders'
import Clients from './pages/Clients'
import Login from './pages/Login'


import './style.css'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={Main} />
      <Route path="/clients" component={Clients} />
      <Route path="/orders" component={Orders} />
      <Route path="/queues" component={Queues} />
      <Route path="/login" component={Login} />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
