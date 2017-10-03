import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


class ClientOrders extends React.Component {
  constructor (props) {
    super(props)

    console.log('http://localhost:8000/clients/'.concat(this.props.match.params.client.toString()).concat('/orders'))

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
        <div>
          <h3>Lista de Orders</h3>
        </div>
        {
          this.state.client_orders.map(order => (
            <p>
              <NavLink to={`orders/${order.sentinela_id}`}>{order.external_id}</NavLink>
            </p>
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
