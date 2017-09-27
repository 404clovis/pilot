import React from 'react'
import ReactJson from 'react-json-view'
import Customer from '../../containers/Customer'
import Billing from '../../containers/Billing'
import Payment from '../../containers/Payment'


class Orders extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: {},
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/orders/ABASTECEAI-IPIRANGA-5ff344a59b674282a1e2b3cec3b9b822')
      .then(response => response.json())
      .then(response => this.setState({ orders: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (!this.state.orders.source || !this.state.orders.source.payment) {
      return false
    }

    const orders = this.state.orders
    const meta = orders.meta
    const source = orders.source
    const customer = source.customer
    const billing = source.billing
    const payment = source.payment

    console.log(JSON.stringify(payment.transactions, null, 2))

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
            <div className="order-billing">
              <Billing billing={billing} />
            </div>
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
