import React from 'react'
import ReactJson from 'react-json-view'
import Customer from './Customer'
import Billing from './Billing'
import Shipping from './Shipping'
import Payment from './Payment'
import Products from './Products'
import Credits from './Credits'
import Seller from './Seller'
import Device from './Device'
import Analysis from '../Analysis'


class Order extends React.Component {
  constructor (props) {
    super(props)

    const url = 'http://localhost:8000/clients/'.concat(this.props.match.params.sentinela)

    console.log(url)

    this.state = {
      orders: {},
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/orders/'.concat(this.props.match.params.sentinela.toString()))
      .then(response => response.json())
      .then(response => this.setState({ orders: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (!this.state.orders.source) {
      return false
    }

    const orders = this.state.orders
    const meta = orders.meta
    const source = orders.source
    const customer = source.customer
    const billing = source.billing
    const shipping = source.shipping
    const payment = source.payment
    const products = source.products
    const credits = source.credits
    const seller = source.seller
    const device = source.device

    return (
      <div>
        <div>
          <Analysis />
          <div className="orders">
            <div className="order-id">
              <h3>Código do pedido - {source.sentinela_id}</h3>
            </div>
            <div className="order-customer">
              <Customer customer={customer} />
            </div>
            <hr />
            {billing &&
            <div className="order-billing">
              <Billing billing={billing} />
            </div>
            }
            <hr />
            {shipping &&
            <div className="order-shipping">
              <Shipping shipping={shipping} />
            </div>
            }
            <hr />
            {products &&
            <div className="order-products">
              <Products products={products} />
            </div>
            }
            <hr />
            {credits &&
            <div className="credits">
              <Credits credits={credits} />
            </div>
            }
            <hr />
            {seller &&
            <div className="seller">
              <Seller seller={seller} />
            </div>
            }
            <hr />
            {device &&
            <div className="order-device">
              <Device device={device} />
            </div>
            }
            <hr />
            <div className="order-payment">
              <Payment payment={payment} />
            </div>
            <hr />
            <div className="order-meta-json-view">
              <ReactJson src={meta} />
            </div>
            <hr />
            <div className="order-source-json-view">
              <ReactJson src={source} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Order.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      sentinela: React.PropTypes.string,
    }),
  }),
}

Order.defaultProps = {
  match: {
    params: {
      sentinela: null,
    },
  },
}

export default Order
