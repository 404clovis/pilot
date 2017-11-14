import React from 'react'
import ReactLoading from 'react-loading'
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from '../../../components/Grid'


class ListQueues extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      queues: [],
      loading: true,
      authorized: true,
      errors: null,
    }
  }

  componentDidMount () {
    const sessionId = localStorage.getItem('sessionId')
    console.log(sessionId)

    fetch(`${process.env.REACT_APP_DASH_API}/v1/queues`, {
      headers: {
        SessionId: sessionId,
      },
    }).then(response => response.json())
      .then(response => this.setState({ queues: response, authorized: true, loading: false }))
  }

  render () {
    if (this.state.loading) {
      return (
        <div>
          <ReactLoading type="spin" color="#a9d25d" height="30" width="30" />
        </div>
      )
    }

    return (
      <Grid>
        <Row>
          <Col desk={12} tv={12} tablet={12} palm={12}>
            <table>
              <thead>
                <tr>
                  <th><span>Id</span></th>
                  <th><span>Descrição</span></th>
                  <th><span>Name</span></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.queues.map(queue => (
                    <tr>
                      <td>
                        <NavLink to={`/queues/${queue.id}`}>
                          {queue.id}
                        </NavLink>
                      </td>
                      <td>
                        <span>{queue.description}</span>
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

export default ListQueues
