import PropTypes from 'prop-types'
import React from 'react'
import { Redirect } from 'react-router-dom'
import FaUserSecret from 'react-icons/lib/fa/user-secret'
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt'
import Details from '../Details'
import Dropdown from '../../components/Dropdown'
import Button from '../../components/Button'
import style from './style.css'


const StatusConverter = {
  aprovar: 'man_approved',
  reprovar: 'man_declined',
  cancelado: 'canceled',
  suspeito: 'man_declined',
  fraude: 'man_declined',
  ataque: 'man_declined',
  agendar: 'schedule',
}

const Status = input => StatusConverter[input]

class SniffBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: null,
      commented: null,
      analized: false,
      redirect: false,
    }

    this.handleFinalization = this.handleFinalization.bind(this)
    this.handleUnlock = this.handleUnlock.bind(this)
    this.handleSchedule = this.handleSchedule.bind(this)
  }

  handleFinalization (event) {
    const sessionId = localStorage.getItem('sessionId')
    fetch(`${process.env.REACT_APP_DASH_API}/v1/order/${this.props.sentinelaId}`, {
      method: 'PUT',
      headers: {
        SessionId: sessionId,
      },
      body: JSON.stringify({
        decision_by: this.props.sentinelaId,
        comments: this.state.commented,
        status: Status(this.state.selected.toLowerCase()) }),
    }).then(res => console.log(res))
      .then(() => this.setState({ redirect: true, analized: true }))
    event.preventDefault()
  }

  handleSchedule (event) {
    const sessionId = localStorage.getItem('sessionId')
    fetch(`${process.env.REACT_APP_DASH_API}/v1/orders/schedule/PEDIDOSJA-bc481f20c90145e082a1c988a2804d9e/2017-11-23T00:00:00.1234`, {
      method: 'PUT',
      headers: {
        SessionId: sessionId,
      },
      body: JSON.stringify({
        comment: this.state.commented }),
    }).then(res => console.log(res))
      .then(() => this.setState({ redirect: true, analized: true }))
    event.preventDefault()
  }

  handleUnlock (event) {
    const sessionId = localStorage.getItem('sessionId')
    fetch(`${process.env.REACT_APP_DASH_API}/v1/order/unlock/${this.props.sentinelaId}`, {
      method: 'PUT',
      headers: {
        SessionId: sessionId,
      },
    }).then(res => console.log(res))
      .then(() => this.setState({ redirect: true }))
    event.preventDefault()
  }

  render () {
    const options = [
      {
        name: 'Aprovar',
        value: 'Aprovar',
      },
      {
        name: 'Reprovar',
        value: 'Reprovar',
      },
      {
        name: 'Cancelado',
        value: 'Cancelado',
      },
      {
        name: 'Suspeito',
        value: 'Suspeito',
      },
      {
        name: 'Fraude',
        value: 'Fraude confirmada',
      },
      {
        name: 'Ataque',
        value: 'Ataque/Fraude',
      },
      {
        name: 'Agendar',
        value: 'Agendamento',
      },
    ]

    if (this.state.redirect) {
      return <Redirect to="/queues" />
    }

    return (
      <div className={style.sniffBox}>
        <Details
          documentNumber={this.props.documentNumber}
          emailAddress={this.props.emailAddress}
        />
        <div>
          <div>
            <h4>
              <span>
                <FaUserSecret />
              </span>
              Rexumo
              <Button
                onClick={this.handleUnlock}
                size="micro"
                variant="clean"
                color="silver"
              >
                <FaUnlockAlt />
              </Button>
            </h4>
          </div>
          <div className={style.summary}>
            <form onSubmit={this.handleSubmit}>
              <textarea
                onChange={comment => this.setState({ commented: comment })}
                className={style.result}
                placeholder="Escreva o Rexumo aqui..."
                rows={10}
                disabled={this.props.orderStatus !== 'pending_analysis'}
              />
              <span className={style.sniffBoxDropdown}>
                <Dropdown
                  options={options}
                  name="statusFinalizacao"
                  label="Status de finalização"
                  value={this.state.selected || options[0].value}
                  onChange={value => this.setState({ selected: value })}
                  disabled={this.props.orderStatus !== 'pending_analysis'}
                />
              </span>
            </form>
          </div>
        </div>
        {(this.state.selected === 'Agendamento') &&
          <span>
            Agendar
          </span>
        }
        {(this.props.orderStatus === 'pending_analysis') &&
        <span className={style.sniffBoxButton}>
          <Button onClick={this.handleFinalization} size="micro" color="blue">
            Finalizar Pedido
          </Button>
        </span>
        }
        <span className={style.sniffBoxButton}>
          <Button onClick={this.handleSchedule} size="micro" color="blue">
            Agendar Pedido
          </Button>
        </span>
      </div>
    )
  }
}

SniffBox.propTypes = {
  documentNumber: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  sentinelaId: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
  orderStatus: PropTypes.string.isRequired,
}

export default SniffBox
