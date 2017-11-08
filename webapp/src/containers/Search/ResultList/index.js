import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading'
import queryString from 'query-string'
import Moment from 'react-moment'
import style from '../../Orders/style.css'
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

class ResultList extends React.Component {
  constructor (props) {
    super(props)
    const parsed = queryString.parse(this.props.match.params.data.toString())
    let query = ''
    if (parsed.Key) {
      query = parsed.Key
    }
    if (parsed.CPF) {
      query = parsed.CPF
    }
    console.log('http://localhost:8000/orders/'.concat(query))

    this.state = {
      searchResult: [],
      loading: true,
      errors: {},
    }
  }

  componentDidMount () {
    const parsed = queryString.parse(this.props.match.params.data.toString())
    let query = ''
    if (parsed.Key) {
      query = parsed.Key
    }
    if (parsed.CPF) {
      query = parsed.CPF
    }
    fetch('http://localhost:8000/orders'.concat(query))
      .then(response => response.json())
      .then(response => this.setState({ searchResult: response, loading: false }))
      .catch(errors => this.setState({ errors }))
  }


  componentWillReceiveProps (nextProps) {
    const parsed = queryString.parse(nextProps.match.params.data.toString())
    let query = ''
    if (parsed.Key) {
      query = parsed.Key
    }
    if (parsed.CPF) {
      query = parsed.CPF
    }
    fetch('http://localhost:8000/orders'.concat(query))
      .then(response => response.json())
      .then(response => this.setState({ searchResult: response, loading: false }))
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
          <h3>
            Número de Pedidos {Object.keys(this.state.searchResult).length}
          </h3>
        </div>
        <Grid>
          <Row>
            <Col tv={12} desk={12} tablet={12} palm={12}>
              <table className={style.rexTable}>
                <thead>
                  <tr>
                    <th><h3>Identificador do pedido</h3></th>
                    <th><h3>Nome do comprador</h3></th>
                    <th><h3>Email do comprador</h3></th>
                    <th><h3>REXcore</h3></th>
                    <th><h3>Score</h3></th>
                    <th className={style.tableItemRight}><h3>Valor do pedido</h3></th>
                    <th className={style.tableItemRight}><h3>Data do pedido</h3></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.searchResult.map(order => (
                      <tr className={style.greyColor}>
                        <td><NavLink to={`/search/${this.props.match.params.data.toString()}/${order.sentinela_id}`}>{order.sentinela_id.substr(0, 10)}...{order.sentinela_id.substr(18, 25)}</NavLink></td>
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

ResultList.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      data: React.PropTypes.string,
      client: React.PropTypes.string,
    }),
  }),
}

ResultList.defaultProps = {
  match: {
    params: {
      data: null,
      client: null,
    },
  },
}

export default ResultList
