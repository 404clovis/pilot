import React from 'react'
import PropTypes from 'prop-types'
import { Table, Column, Cell } from 'fixed-data-table'


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
      <Table
        rowHeight={12}
        rowsCount={40}
        width={10}
        height={12}
        headerHeight={10}
      >
        <Column
          header={<Cell>Name</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.state.client_orders[props.rowIndex].sentinela_id}
            </Cell>
          )}
          width={200}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={props => (
            <Cell {...props}>
              {this.state.client_orders[props.rowIndex].external_id}
            </Cell>
          )}
          width={200}
        />
      </Table>
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
