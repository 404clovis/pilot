import PropTypes from 'prop-types'
import React from 'react'
import Details from '../Details'
import Dropdown from '../../components/Dropdown'
import Button from '../../components/Button'
import style from './style.css'


class SniffBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = { selected: '' }
  }

  handleFinalization (event) {
    fetch('http://localhost:8000/history/document/'.concat(this.props.documentNumber))
      .then(response => response.json())
      .then(response => this.setState({ historical: response, loading: false }))
      .catch(errors => this.setState({ errors }))
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
        name: 'Fraude confirmada',
        value: 'Fraude confirmada',
      },
      {
        name: 'Ataque',
        value: 'Ataque/Fraude',
      },
    ]

    return (
      <div className={style.sniffBox}>
        <Details
          documentNumber={this.props.documentNumber}
          emailAddress={this.props.emailAddress}
        />
        <span>
          <Dropdown
            options={options}
            name="statusFinalizacao"
            label="Status de finalização"
            onChange={value => this.setState({ selected: value })}
          />
        </span>
        <span className={style.sniffBoxButton}>
          { this.state.selected &&
            <Button onClick={this.handleFinalization} size="tiny" color="blue">
              {this.state.selected}
            </Button>
          }
        </span>
      </div>
    )
  }
}

SniffBox.propTypes = {
  documentNumber: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
}

export default SniffBox
