import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from '../../../components/Grid'


class QueueItems extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      queue_items: [],
      loading: true,
      errors: {},
    }
  }

  componentDidMount () {
    const sessionId = localStorage.getItem('sessionId')
    fetch(`${process.env.REACT_APP_DASH_API}/v1/queues/${this.props.match.params.queue}`, {
      headers: {
        SessionId: sessionId,
      },
    }).then(response => response.json())
      .then(response => this.setState({ queue_items: response, loading: false }))
      .catch(errors => this.setState({ errors }))
  }

  render () {
    const queueItems = this.state.queue_items
    const items = queueItems.items
    // const meta = queueItems.meta

    if (this.state.loading) {
      return (
        <div>
          <ReactLoading type="spin" color="#a9d25d" height="30" width="30" />
        </div>
      )
    }
    return (
      <div>
        <div>
          <h3>Lista de Itens na fila</h3>
        </div>
        <Grid>
          <Row>
            <Col tv={12} desk={12} tablet={12} palm={12}>
              <table>
                <thead>
                  <tr>
                    <th><span>Identificador do pedido</span></th>
                    <th><span>Item id</span></th>
                    <th><span>Tipo</span></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items.map(item => (
                      <tr>
                        <td><NavLink to={`${this.props.match.params.queue}/${item.item_id}`}>{item.item_id}</NavLink></td>
                        <td>{item.type}</td>
                        <td>{item.id}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

QueueItems.propTypes = {
  match: React.PropTypes.shape({
    params: PropTypes.shape({
      queue: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default QueueItems
