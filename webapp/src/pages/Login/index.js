import React from 'react'
import { Redirect } from 'react-router-dom'
import Alert from '../../components/Alert'
import { Grid, Row, Col } from '../../components/Grid'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {
  Card,
  CardTitle,
  CardContent,
} from '../../components/Card'


class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      pass: '',
      isAuth: false,
      result: {},
      status: 400,
      errors: null,
      loading: true,
    }

    this.handleFinalization = this.handleFinalization.bind(this)
  }

  componentDidMount () {
    const sessionId = localStorage.getItem('sessionId')
    fetch(process.env.REACT_APP_DASH_API.concat('/auth'), {
      timeout: 5,
      headers: {
        SessionId: sessionId,
      },
    }).then(response => this.setState({ status: response.status }))
  }

  handleFinalization (event) {
    fetch('https://account.rexlab.com.br/login/json/authenticate', {
      method: 'POST',
      headers: ({
        'X-OpenAM-Username': this.state.email,
        'X-OpenAM-Password': this.state.pass,
        'Content-Type': 'application/json',
      }),
    }).then(response => response.json())
      .then(response => this.setState({ result: response }))
    event.preventDefault()
  }

  render () {
    const result = this.state.result

    if (result.tokenId) {
      localStorage.setItem('sessionId', result.tokenId)
      return <Redirect to="/clients" />
    }

    return (
      <div>
        <Grid>
          <Row>
            <Col desk={4} tv={4} tablet={12} palm={12}>
              <Card>
                <CardTitle
                  title="Login"
                />
                <CardContent>
                  {result.code && <Alert type="info" base="light">
                    <p><strong>Ops!</strong> {result.reason}</p>
                  </Alert>}
                  <Input
                    name="Email"
                    label="Digite seu email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <Input
                    name="Password"
                    type="password"
                    label="Senha"
                    value={this.state.pass}
                    onChange={e => this.setState({ pass: e.target.value })}
                  />
                  <Button onClick={this.handleFinalization} size="micro">
                    Login
                  </Button>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Login
