import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Orders from './pages/Orders'

import './style.css'

ReactDOM.render((
  <BrowserRouter>
    <Orders />
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
