import PropTypes from 'prop-types'
import React from 'react'
import Details from '../Details'
import Button from '../../components/Button'
import Finalization from './Finalization'

class SniffBox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentState: () => (
        <div>
          <Details
            documentNumber={props.documentNumber}
            emailAddress={props.emailAddress}
          />
          <Button onClick={this.handleFinalization}>
            Ir para Finalização de Caso
          </Button>
        </div>
      ),
    }
    this.handleFinalization = this.handleFinalization.bind(this)
  }

  handleFinalization (event) {
    this.setState({ currentState: () => (<Finalization />) })
    event.preventDefault()
  }

  render () {
    return (
      <div>
        {this.state.currentState()}
      </div>
    )
  }
}

SniffBox.propTypes = {
  documentNumber: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
}

export default SniffBox
