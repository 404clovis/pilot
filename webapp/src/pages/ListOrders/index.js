import React from 'react'
import '../../containers/Menu'


class ListOrders extends React.Component {
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
    return (
      <div>
        TODAS AS ORDERS LISTADAS
      </div>
    )
  }
}

export default ListOrders
