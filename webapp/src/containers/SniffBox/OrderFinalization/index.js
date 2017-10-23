import React from 'react'
import style from '../style.css'
import { Grid, Row, Col } from '../../../components/Grid'
import Button from '../../../components/Button'
import {
  Card,
  CardContent,
} from '../../../components/Card'

class OrderFinalization extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      btn: () => null,
      btn2: () => null,
    }
    this.handleReprove = this.handleReprove.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleReprove (event) {
    this.setState({ text: 'Qual o motivo de reprovação?' })
    this.setState({ btn: () => (
      <div className={style.finalizationMargin}>
        <Button base="light" color="yellow" variant="outline">
          Reprovado por Impossibilidade de Contato
        </Button>
      </div>
    ) })
    this.setState({ btn2: () => (
      <div className={style.finalizationMargin}>
        <Button base="light" color="yellow" variant="outline">
          Reprovado por Segurança
        </Button>
      </div>
    ) })
    event.preventDefault()
  }

  handleCancel (event) {
    this.setState({ text: 'Qual o motivo do cancelamento? ' })
    this.setState({ btn: () => (
      <div className={style.finalizationMargin}>
        <Button base="dark" color="pink" variant="outline">
          Duplicidade
        </Button>
      </div>
    ) })
    this.setState({ btn2: () => (
      <div className={style.finalizationMargin}>
        <Button base="dark" color="pink" variant="outline">
          Pelo Cliente
        </Button>
      </div>
    ) })
    event.preventDefault()
  }

  render () {
    return (
      <div>
        <Grid>
          <Row>
            <Col v={6} desk={6} tablet={12} palm={12}>
              <div className={style.finalization}>
                <div className={style.finalizationMargin}>
                  <Button
                    base="light"
                    color="green-primary"
                    variant="outline"
                  >Aprovado</Button>
                </div>
                <div className={style.finalizationMargin}>
                  <Button
                    onClick={this.handleReprove}
                    base="light"
                    color="yellow"
                    variant="outline"
                  >Reprovado</Button>
                </div>
                <div className={style.finalizationMargin}>
                  <Button
                    onClick={this.handleCancel}
                    base="dark"
                    color="pink"
                    variant="outline"
                  >Cancelado</Button>
                </div>
                <div className={style.finalizationMargin}>
                  <Button
                    base="light"
                    color="red"
                    variant="outline"
                  >Suspeito</Button>
                </div>
                <div className={style.finalizationMargin}>
                  <Button
                    base="light"
                    color="pink"
                    variant="outline"
                  >Fraude Confirmada</Button>
                </div>
              </div>
            </Col>
            <Col v={6} desk={6} tablet={12} palm={12}>
              <Card>
                <CardContent>
                  {this.state.text}
                  {this.state.btn()}
                  {this.state.btn2()}
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default OrderFinalization
