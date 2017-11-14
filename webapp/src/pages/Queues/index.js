import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListQueues from '../../containers/Queues/ListQueues'
import QueueItems from '../../containers/Queues/QueueItems'
import Order from '../../containers/Order'
import NotFound from '../../containers/NotFound'


const Queues = props => (
  <div>
    <Switch>
      <Route exact path={`${props.match.url}`} component={ListQueues} />
      <Route exact path={`${props.match.url}/:queue`} component={QueueItems} />
      <Route exact path={`${props.match.url}/:queue/:sentinela`} component={Order} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

Queues.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string,
  }),
}

Queues.defaultProps = {
  match: {
    url: null,
  },
}

export default Queues
