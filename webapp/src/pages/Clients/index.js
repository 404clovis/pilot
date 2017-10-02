import React from 'react'
import { NavLink } from 'react-router-dom'
import SpeedFilter from '../../components/SpeedFilter'


class Clients extends React.Component {
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
        <div>
          <h4>Filtrar clientes</h4>
          <SpeedFilter />
        </div>
        <div>
          {
            this.state.clients.map(client => (
              <div className="client">
                <h2>{client.name}</h2>
                <NavLink to={`/clients/${client.client_key}/orders`}>Ver orders</NavLink>
                <br />
                <NavLink to={`/clients/${client.client_key}`}>Ver detalhes</NavLink>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Clients
