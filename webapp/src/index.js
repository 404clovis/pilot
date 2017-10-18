import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Main from './containers/Main'
import Queues from './containers/Queues'
import Orders from './containers/Orders'
import Clients from './pages/Clients'

import './style.css'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={Main} />
      <Route path="/clients" component={Clients} />
      <Route path="/orders" component={Orders} />
      <Route path="/queues" component={Queues} />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
