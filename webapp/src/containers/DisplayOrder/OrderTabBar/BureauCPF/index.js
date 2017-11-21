import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import Address from './Addresses'
import Family from './Family'
import FamilyTitle from './FamilyTitle'
import Phones from './Phones'
import Personal from './Personal'
import AddressTitle from './AddressTitle'

import { Grid, Row, Col } from '../../../../components/Grid'
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
    console.log(procob)
    if (procob.found !== true) {
      return null
    }

    const address = procob.addresses
    const family = procob.family
    const phones = procob.phones
    const personal = procob.personal_data
    console.log(personal)
    const emails = procob.emails
    const housemates = procob.housemates
    console.log(housemates)

    return (
      <div>
        {personal &&
        <Card>
          <CardTitle title="Dados Pessoais" />
          <CardContent>
            <Personal personal={personal[0]} />
          </CardContent>
        </Card>
        }
        {emails &&
        <Card>
          <CardTitle title="Emails" />
          <CardContent>
            {emails.map(email =>
              <p className={style.address}>{email}</p>
            )}
          </CardContent>
        </Card>
        }
        {housemates &&
        <Card>
          <CardTitle title="Moram na mesma residência" />
          <CardContent>
            {housemates.map(house =>
              <p className={style.address}>{house.document_number} - {house.name}</p>
            )}
          </CardContent>
        </Card>
        }
        {address &&
        <Card>
          <CardTitle title="Endereços" />
          <CardContent>
            <AddressTitle address={address} />
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
        {(phones) &&
        <Card>
          <CardTitle title="Telefones" />
          <CardContent>
            <Grid>
              <Row>
                <Col tv={1} desk={1} tablet={2} palm={2}>
                  <div className={style.familyTitle}>RESIDENCIAL</div>
                  <br />
                  {phones.residential.map(phone =>
                    <Phones phones={phone} />
                  )}
                </Col>
                <Col tv={1} desk={1} tablet={2} palm={2}>
                  <div className={style.familyTitle}>CELULAR</div>
                  <br />
                  {phones.cellphone.map(phone =>
                    <Phones phones={phone} />
                  )}
                </Col>
                <Col tv={1} desk={1} tablet={1} palm={2}>
                  <div className={style.familyTitle}>OUTROS</div>
                  <br />
                  {phones.others.map(phone =>
                    <Phones phones={phone} />
                  )}
                  {phones.commercial.map(phone =>
                    <Phones phones={phone} />
                  )}
                </Col>
              </Row>
            </Grid>
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
