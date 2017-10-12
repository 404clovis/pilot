import React from 'react'
import { NavLink } from 'react-router-dom'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import style from './style.css'

const PaymentCurrencyConverter = {
  BRL: 'R$',
  USD: 'U$',
  EUR: '€',
  ARS: '$',
}

const CentsToDollar = value => (
  <span className="currency">
    {(Number(value) / 100).toFixed(2).replace('.', ',')}
  </span>
)

const PaymentCurrency = input => PaymentCurrencyConverter[input]

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
        <table className={style.rexTable}>
          <thead>
            <tr>
              <th><h3>Identificador do pedido</h3></th>
              <th><h3>Nome do comprador</h3></th>
              <th><h3>Email do comprador</h3></th>
              <th><h3>Valor do pedido</h3></th>
              <th><h3>REXcore</h3></th>
              <th><h3>Score</h3></th>
              <th><h3>Data do pedido</h3></th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.client_orders.map(order => (
                <tr className={style.greyColor}>
                  <td><NavLink to={`orders/${order.sentinela_id}`}>{order.sentinela_id.substr(0, 10)}...{order.sentinela_id.substr(18, 25)}</NavLink></td>
                  <td>{order.customer_name}</td>
                  <td>{order.customer_email}</td>
                  <td>
                    <span>{PaymentCurrency(order.payment_currency)}</span>
                    <span>{CentsToDollar(order.total_amount)}</span>
                  </td>
                  <td>{order.rex_score}</td>
                  <td>{order.score}</td>
                  <td><Moment format="DD/MM/YYYY HH:mm">{order.order_date}</Moment></td>
                </tr>
              ))
            }
          </tbody>
        </table>
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
