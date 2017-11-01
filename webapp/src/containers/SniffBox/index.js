import PropTypes from 'prop-types'
import React from 'react'
import { Redirect } from 'react-router-dom'
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
      selected: '',
      analized: false,
      redirect: false,
    }

    this.handleFinalization = this.handleFinalization.bind(this)
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
        <span className={style.sniffBoxDropdown}>
          <Dropdown
            options={options}
            name="statusFinalizacao"
            label="Status de finalização"
            value={this.state.selected}
            onChange={value => this.setState({ selected: value })}
          />
        </span>
        <span className={style.sniffBoxButton}>
          <Button onClick={this.handleFinalization} size="micro" color="blue">
            Finalizar Pedido
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
}

export default SniffBox
