import React from 'react'

class Orders extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    fetch('google.com')
      .then(res => res.json())
      .then(response => this.setState({ orders: response.orders }))
      .catch(error => this.setState({ error }))
  }

  render() {
    <div>
      <div className={'orders'}>
        {this.state.orders}
      </div>
      {this.state.errors && <div>{this.state.errors}</div>}
    </div>
  }
}

export default Orders
