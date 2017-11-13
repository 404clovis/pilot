import React from 'react'
import PropTypes from 'prop-types'
import Address from './Addresses'
import Family from './Family'
import FamilyTitle from './FamilyTitle'

import {
  Card,
  CardTitle,
  CardContent,
} from '../../../../components/Card'

class BureauCPF extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: {},
    }
  }

  render () {
    const procob = JSON.parse(this.props.cpfJSON)
    const address = procob.addresses
    console.log(address)
    const family = procob.family
    console.log(family)

    return (
      <div>
        {address &&
        <Card>
          <CardTitle title="Endereços" />
          <CardContent>
            {address.map(addresses =>
              <Address address={addresses} />
            )}
          </CardContent>
        </Card>
        }
        {family &&
        <Card>
          <CardTitle title="Familiares" />
          <CardContent>
            <FamilyTitle family={family} />
            {family.map(relatives =>
              <Family family={relatives} />
            )}
          </CardContent>
        </Card>
        }
        {this.props.cpfJSON}
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
