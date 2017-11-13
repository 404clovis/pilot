import React from 'react'
import PropTypes from 'prop-types'
import Address from './Addresses'
import {
  Card,
  CardTitle,
  CardContent,
} from '../../../../components/Card'

class BureauCPF extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Addresses: [],
      Contacts: {},
      Documents: {},
      Emails: {},
      Family: {},
      Housemate: {},
      Personal: {},
      Phones: {},
      Workplaces: {},
    }
  }

  render () {
    const procob = JSON.parse(this.props.cpfJSON)
    console.log(procob)
    const address = procob.addresses
    console.log(address)

    return (
      <div>
        <Card>
          <CardTitle title="Endereços" />
          <CardContent>
            {
              address.map(addresses =>
                <Address address={addresses} />
              )
            }
          </CardContent>
        </Card>
      </div>
    )
  }
}

BureauCPF.propTypes = {
  cpfJSON: PropTypes.string,
}

BureauCPF.defaultProps = {
  cpfJSON: null,
}

export default BureauCPF
