import React from 'react'
import ReactJson from 'react-json-view'


class Client extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      client: {},
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/clients/'.concat(this.props.match.params.client))
      .then(response => response.json())
      .then(response => this.setState({ client: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (!this.state.client) {
      return false
    }

    const client = this.state.client

    return (
      <div>
        <div>
          <div className="orders">
            <hr />
            <div className="order-source-json-view">
              <ReactJson src={client} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Client.propTypes = {
  match: React.PropTypes.shape({
    params: React.PropTypes.shape({
      client: React.PropTypes.string,
    }),
  }),
}

Client.defaultProps = {
  match: {
    params: {
      client: null,
    },
  },
}

export default Client
