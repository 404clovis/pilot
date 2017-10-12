import React from 'react'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from '../../../components/Grid'

import style from '../style.css'


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
      <Grid>
        <Row>
          <Col desk={12} tv={12} tablet={12} palm={12}>
            <div className={style.list}>
              <table className={style.rexTable}>
                <thead>
                  <th className={style.tableItemLeft}><h3>Nome do cliente</h3></th>
                  <th className={style.tableItemCentered}><h3>Chave do cliente</h3></th>
                  <th className={style.tableItemCentered}><h3>Numero de pedidos</h3></th>
                  <th className={style.tableItemCentered}><h3>Conversão</h3></th>
                  <th className={style.tableItemCentered}><h3>SLA médio</h3></th>
                  <th className={style.tableItemRight}><h3>Pedidos do cliente</h3></th>
                </thead>
                <tbody>
                  {
                    this.state.clients.map(client => (
                      <tr>
                        <td>
                          <NavLink to="clients/">{client.name.toUpperCase()}</NavLink>
                        </td>
                        <td>
                          <span className={style.listItemItalic}>{client.client_key}</span>
                        </td>
                        <td className={style.tableItemCentered}>
                          <span>12</span>
                        </td>
                        <td className={style.tableItemCentered}>
                          <span>90%</span>
                        </td>
                        <td className={style.tableItemCentered}>
                          <span>3.5h</span>
                        </td>
                        <td className={style.tableItemCentered}>
                          <span>
                            <NavLink to={`/clients/${client.client_key}/orders`}>
                              Ver pedidos
                            </NavLink>
                          </span>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ListClients
