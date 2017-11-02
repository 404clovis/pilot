import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import style from './style.css'
import { Grid, Row, Col } from '../../../components/Grid'


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

    console.log(process.env.REACT_APP_DASH_API.concat('/clients/').concat(this.props.match.params.client.toString()).concat('/orders'))

    this.state = {
      client_orders: [],
      loading: true,
      errors: {},
    }
  }

  componentDidMount () {
    const sessionId = localStorage.getItem('sessionId')
    fetch(process.env.REACT_APP_DASH_API.concat('/clients/').concat(this.props.match.params.client.toString()).concat('/orders'), {
      headers: {
        SessionId: sessionId,
      },
    }).then(response => response.json())
      .then(response => this.setState({ client_orders: response, loading: false }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (this.state.loading) {
      return (
        <div className={style.loading}>
          <ReactLoading type="spin" color="#a9d25d" height="30" width="30" />
        </div>
      )
    }
    return (
      <div>
        <div>
          <h3>Lista de Orders</h3>
        </div>
        <Grid>
          <Row>
            <Col tv={12} desk={12} tablet={12} palm={12}>
              <table className={style.rexTable}>
                <thead>
                  <tr>
                    <th><span className={style.headerTitle}>Identificador do pedido</span></th>
                    <th><span className={style.headerTitle}>Nome do comprador</span></th>
                    <th><span className={style.headerTitle}>Email do comprador</span></th>
                    <th><span className={style.headerTitle}>REXcore</span></th>
                    <th>
                      <span className={style.headerTitle}>
                        Score
                      </span>
                    </th>
                    <th className={style.tableItemRight}>
                      <span className={style.headerTitle}>
                        Valor do pedido
                      </span>
                    </th>
                    <th className={style.tableItemRight}>
                      <span className={style.headerTitle}>
                        Data do pedido
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.client_orders.map(order => (
                      <tr className={style.greyColor}>
                        <td><NavLink to={`orders/${order.sentinela_id}`}>{order.sentinela_id}</NavLink></td>
                        <td>{order.customer_name.toUpperCase()}</td>
                        <td>{order.customer_email}</td>
                        <td>{(Number(order.rex_score)).toFixed(2)}</td>
                        <td>{(Number(order.score)).toFixed(2)}</td>
                        <td className={style.tableItemRight}>
                          <span>{PaymentCurrency(order.payment_currency)} </span>
                          <span>{CentsToDollar(order.total_amount)}</span>
                        </td>
                        <td className={style.tableItemRight}>
                          <Moment format="DD/MM HH:mm">{order.order_date}</Moment>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </Col>
          </Row>
        </Grid>
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
