import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from '../../../components/Grid'


class ListClients extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clients: [],
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/clients/')
      .then(response => response.json())
      .then(response => this.setState({ clients: response }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (!this.state.clients) {
      return false
    }

    return (
      <div>
        <Grid>
          <Row>
            <Col desk={12} tv={12} tablet={12} palm={12}>
              <div>
                {
                  this.state.clients.map(client => (
                    <div className="client">
                      <span>
                        <NavLink to="clients/">{client.name}</NavLink>
                      </span>
                      <br />
                      <span>
                        <NavLink to={`/clients/${client.client_key}/orders`}>Orders</NavLink>
                      </span>
                      <hr />
                    </div>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ListClients
