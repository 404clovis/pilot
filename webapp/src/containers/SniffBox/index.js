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
  }

  handleFinalization (event) {
    const sessionId = localStorage.getItem('sessionId')
    fetch(process.env.REACT_APP_DASH_API.concat('/orders/').concat(this.props.sentinelaId), {
      method: 'PUT',
      headers: {
        SessionId: sessionId,
      },
      body: JSON.stringify({
        sentinela_id: this.props.sentinelaId,
        order_id: this.props.orderId,
        status: Status(this.state.selected.toLowerCase()) }),
    }).then(res => console.log(res))
      .then(() => this.setState({ redirect: true, analized: true }))
    event.preventDefault()
  }

  handleUnlock (event, sentinelaId) {
    const sessionId = localStorage.getItem('sessionId')
    fetch(process.env.REACT_APP_DASH_API.concat('/order/unlock/').concat(sentinelaId), {
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
    ]

    if (this.state.redirect) {
      return <Redirect to="/clients" />
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
        {(this.props.orderStatus === 'pending_analysis') &&
        <span className={style.sniffBoxButton}>
          <Button onClick={this.handleFinalization} size="micro" color="blue">
            Finalizar Pedido
          </Button>
        </span>
        }
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
