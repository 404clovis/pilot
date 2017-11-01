import React from 'react'
import ReactJson from 'react-json-view'
import Customer from '../../containers/Order/Customer'
import Billing from '../../containers/Order/Billing'
import Shipping from '../../containers/Order/Shipping'
import Payment from '../../containers/Order/Payment'
import Products from '../../containers/Order/Products'
import Credits from '../../containers/Order/Credits'
import Seller from '../../containers/Order/Seller'
import Device from '../../containers/Order/Device'


class Orders extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: {},
      errors: {},
    }
  }

  componentDidMount () {
    fetch(process.env.REACT_APP_DASH_API.concat('/orders/BELVINOLTDA-df7a3d7d17074620934fb7ffcb39e05'))
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
          <div className="orders">
            <div className="orders-menu">
              <ul>
                <li>Menu</li>
              </ul>
              <hr />
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

export default Orders
