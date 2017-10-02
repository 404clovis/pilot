import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


class ClientOrders extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      client_orders: [],
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/clients/'.concat(this.props.match.params.client.toString()).concat('/orders'))
      .then(response => response.json())
      .then(response => this.setState({ client_orders: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (!this.state.client_orders) {
      return false
    }

    return (
      <div>
        {
          this.state.client_orders.map(order => (
            <NavLink to={`${order.sentinela_id}`}>{order.external_id}</NavLink>
          ))
        }
      </div>
    )
  }
}

ClientOrders.propTypes = {
  match: React.PropTypes.shape({
    params: PropTypes.shape({
      client: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default ClientOrders
