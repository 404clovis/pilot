import React from 'react'
import OrderTabBar from './OrderTabBar'

class DisplayOrder extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      order: {},
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/orders/'.concat(this.props.match.params.sentinela.toString()))
      .then(response => response.json())
      .then(response => this.setState({ order: response }))
      .catch(errors => this.setState({ errors }))
    console.log('http://localhost:8000/orders/'.concat(this.props.match.params.sentinela.toString()))
  }

  render () {
    if (!this.state.order.source) {
      return false
    }
    const orders = this.state.order
    const source = orders.source

    return (
      <div>
        <OrderTabBar source={source} />
      </div>
    )
  }
}

DisplayOrder.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      sentinela: React.PropTypes.string,
      client: React.PropTypes.string,
    }),
  }),
}

DisplayOrder.defaultProps = {
  match: {
    params: {
      sentinela: null,
      client: null,
    },
  },
}

export default DisplayOrder
