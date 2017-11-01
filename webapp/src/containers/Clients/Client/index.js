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
    fetch(process.env.REACT_APP_DASH_API.concat('/clients/').concat(this.props.match.params.client))
      .then(response => response.json())
      .then(response => this.setState({ client: response }))
      .then(response => this.setState({ status: response.statusCode() }))
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
