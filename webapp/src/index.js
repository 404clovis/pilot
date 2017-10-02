import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Main from './containers/Main'
import Queues from './containers/Queues'
import Orders from './pages/Orders'
import Clients from './pages/Clients'
import Client from './containers/Order/Client'
import ClientOrders from './pages/ClientOrders'

import './style.css'

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Main />
      <Route path="/clients/:client/orders" component={ClientOrders} />
      <Route path="/clients/:client" component={Client} />
      <Route path="/orders" component={Orders} />
      <Route path="/clients" component={Clients} />
      <Route path="/queues" component={Queues} />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
