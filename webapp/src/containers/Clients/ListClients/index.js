import React from 'react'
import ReactLoading from 'react-loading'
import Moment from 'react-moment'
import 'moment-timezone'
import 'moment/locale/pt-br'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from '../../../components/Grid'

import style from '../style.css'


class ListClients extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clients: [],
      loading: true,
      errors: {},
    }
  }

  componentDidMount () {
    fetch('http://localhost:8000/clients/')
      .then(response => response.json())
      .then(response => this.setState({ clients: response, loading: false }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    if (this.state.loading) {
      return (
        <div className={style.loading}>
          <ReactLoading type="spin" color="#a9d25d" height="30" width="30" />
        </div>
      )
    }

    return (
      <Grid>
        <Row>
          <Col desk={12} tv={12} tablet={12} palm={12}>
            <table className={style.rexTable}>
              <thead>
                <tr>
                  <th><h3>Nome do cliente</h3></th>
                  <th><h3>Chave do cliente</h3></th>
                  <th><h3>Numero de pedidos</h3></th>
                  <th><h3>SLA médio</h3></th>
                  <th><h3>SLA máximo</h3></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.clients.map(client => (
                    <tr>
                      <td>
                        <NavLink to={`/clients/${client.client_key}/orders`}>
                          {client.name.toUpperCase()}
                        </NavLink>
                      </td>
                      <td>
                        <span className={style.listItemItalic}>{client.client_key}</span>
                      </td>
                      <td>
                        <span>{client.orders_in_queue}</span>
                      </td>
                      <td>
                        <span>
                          <Moment locale="pt-br" format="HH:ss">
                            {client.avg_sla * 1000}
                          </Moment>
                        </span>
                      </td>
                      <td>
                        <span>
                          <Moment locale="pt-br" format="HH:ss">
                            {client.max_sla * 1000}
                          </Moment>
                        </span>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ListClients
