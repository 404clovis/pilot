import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import Address from './Addresses'
import Family from './Family'
import FamilyTitle from './FamilyTitle'
import Phones from './Phones'
import Personal from './Personal'

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
    const cellphone = procob.phones.cellphone
    const residential = procob.phones.residential
    const others = procob.phones.others
    const commercial = procob.phones.commercial
    const personal = procob.personal_data
    console.log(personal)
    const emails = procob.emails
    console.log(emails)

    return (
      <div>
        {personal &&
        <Card>
          <CardTitle title="Dados Pessoais" />
          <CardContent>
            {personal.map(data =>
              <Personal personal={data} />
            )}
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
        {(cellphone || residential || others || commercial) &&
        <Card>
          <CardTitle title="Telefones" />
          <CardContent>
            <Grid>
              <Row>
                <Col tv={1} desk={1} tablet={2} palm={2}>
                  <div className={style.familyTitle}>RESIDENCIAL</div>
                  <br />
                  {residential.map(phone =>
                    <Phones phones={phone} />
                  )}
                </Col>
                <Col tv={1} desk={1} tablet={2} palm={2}>
                  <div className={style.familyTitle}>CELULAR</div>
                  <br />
                  {cellphone.map(phone =>
                    <Phones phones={phone} />
                  )}
                </Col>
                <Col tv={1} desk={1} tablet={1} palm={2}>
                  <div className={style.familyTitle}>OUTROS</div>
                  <br />
                  {others.map(phone =>
                    <Phones phones={phone} />
                  )}
                  {commercial.map(phone =>
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
