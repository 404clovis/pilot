import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ClientOrders from '../../containers/Clients/ClientOrders'
import ListClients from '../../containers/Clients/ListClients'
import Client from '../../containers/Clients/Client'
import Order from '../../containers/Order'
import NotFound from '../../containers/NotFound'


const Clients = props => (
  <div>
    <h6>Clientes Rexlab - A razão</h6>
    <Switch>
      <Route exact path={`${props.match.url}`} component={ListClients} />
      <Route exact path={`${props.match.url}/:client`} component={Client} />
      <Route exact path={`${props.match.url}/:client/orders`} component={ClientOrders} />
      <Route exact path={`${props.match.url}/:client/orders/:sentinela`} component={Order} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

Clients.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string,
  }),
}

Clients.defaultProps = {
  match: {
    url: null,
  },
}

export default Clients
