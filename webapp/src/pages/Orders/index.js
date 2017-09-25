import React from 'react'
import ReactJson from 'react-json-view'
import '../../containers/Menu'


class Orders extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [],
      errors: [],
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/orders/ESPORTEINTERATIVO-388fab4b2963499f914f13c714953c21')
      .then(response => response.json())
      .then(response => this.setState({ orders: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    const orders = this.state.orders

    console.log(orders)

    const meta = orders.meta

    console.log(meta)

    const source = orders.source

    return (
      <div>
        <div>
          <div className="orders">
            <div className="orders-menu">
              <ul>
                <li>Clovis</li>
                <li>Da</li>
                <li>Pra</li>
                <li>fazer</li>
                <li>um menuzinho?</li>
                <li>Uma telinha e pá</li>
              </ul>
              <hr />
            </div>
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
