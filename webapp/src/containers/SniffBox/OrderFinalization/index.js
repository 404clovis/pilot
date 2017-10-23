import React from 'react'
import style from '../style.css'
import { Grid, Row, Col } from '../../../components/Grid'
import Button from '../../../components/Button'

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
        <Button>
          Reprovado por Impossibilidade de Contato
        </Button>
      </div>
    ) })
    this.setState({ btn2: () => (
      <div className={style.finalizationMargin}>
        <Button>
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
        <Button>
          Duplicidade
        </Button>
      </div>
    ) })
    this.setState({ btn2: () => (
      <div className={style.finalizationMargin}>
        <Button>
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
                    color="blue"
                  >Aprovar</Button>
                </div>
                <div className={style.finalizationMargin}>
                  <Button
                    onClick={this.handleReprove}
                    color="pink"
                  >Reprovar</Button>
                </div>
                <div className={style.finalizationMargin}>
                  <Button
                    onClick={this.handleCancel}
                    color="plumb"
                  >Cancelar</Button>
                </div>
                <div className={style.finalizationMargin}>
                  <Button
                    color="silver"
                  >Suspeito</Button>
                </div>
                <div className={style.finalizationMargin}>
                  <Button
                    color="purple"
                  >Fraude Confirmada</Button>
                </div>
              </div>
            </Col>
            <Col tv={6} desk={6} tablet={12} palm={12}>
              <span>{this.state.text}</span>
              {this.state.btn()}
              {this.state.btn2()}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default OrderFinalization
