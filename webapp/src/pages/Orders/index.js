import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListOrders from '../../containers/Orders'
import Order from '../../containers/Order'
import NotFound from '../../containers/NotFound'


const Orders = props => (
  <div>
    <Switch>
      <Route exact path={`${props.match.url}`} component={ListOrders} />
      <Route exact path={`${props.match.url}/:sentinela`} component={Order} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

Orders.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string,
  }),
}

Orders.defaultProps = {
  match: {
    url: null,
  },
}

export default Orders
