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
      authorized: true,
      errors: null,
    }
  }

  componentDidMount () {
    const sessionId = localStorage.getItem('sessionId')
    console.log(sessionId)

    fetch(`${process.env.REACT_APP_DASH_API}/clients`, {
      headers: {
        SessionId: sessionId,
      },
    }).then(response => response.json())
      .then(response => this.setState({ clients: response, authorized: true, loading: false }))
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
                  <th><span className={style.headerTitle}>Nome do cliente</span></th>
                  <th><span className={style.headerTitle}>Chave do cliente</span></th>
                  <th><span className={style.headerTitle}>Numero de pedidos</span></th>
                  <th><span className={style.headerTitle}>SLA médio</span></th>
                  <th><span className={style.headerTitle}>SLA máximo</span></th>
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
