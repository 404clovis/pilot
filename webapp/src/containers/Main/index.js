import { Switch, Route } from 'react-router-dom'
import React from 'react'

import Orders from '../../pages/Orders'
import Home from '../../pages/Home'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/orders" component={Orders} />
    </Switch>
  </main>
)

export default Main
