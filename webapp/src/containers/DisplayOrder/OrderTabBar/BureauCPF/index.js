import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'
import Address from './Addresses'
import AddressTitle from './AddressTitle'
import Family from './Family'
import FamilyTitle from './FamilyTitle'
import Phones from './Phones'
import Personal from './Personal'
import WorkPlace from './WorkPlaces'
import WorkTitle from './WorkTitle'
import Contacts from './Contacts'
import ContactsTitle from './ContactsTitle'

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
    const work = procob.work_places
    const contacts = procob.person_contacts

    return (
      <Grid>
        <Row>
          <Col tv={5} desk={5} tablet={2} palm={2}>
            {personal[0] &&
            <Card>
              <CardTitle title="Dados Pessoais" />
              <CardContent>
                <Personal personal={personal[0]} />
              </CardContent>
            </Card>
            }
          </Col>
          <Col tv={4} desk={4} tablet={2} palm={2}>
            {(phones) &&
            <Card>
              <CardTitle title="Telefones" />
              <CardContent>
                <Grid>
                  <Row>
                    <Col tv={4} desk={4} tablet={12} palm={12}>
                      <div className={style.familyTitle}>RESIDENCIAIS</div>
                      <br />
                      {phones.residential.map(phone =>
                        <Phones phones={phone} />
                      )}
                    </Col>
                    <Col tv={4} desk={4} tablet={12} palm={12}>
                      <div className={style.familyTitle}>CELULARES</div>
                      <br />
                      {phones.cellphone.map(phone =>
                        <Phones phones={phone} />
                      )}
                    </Col>
                    <Col tv={4} desk={4} tablet={12} palm={12}>
                      <div className={style.familyTitle}>OUTROS TELEFONES</div>
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
          </Col>
          <Col tv={3} desk={3} tablet={2} palm={2}>
            <Card>
              <CardTitle title="Emails" />
              <CardContent>
                {emails.map(email =>
                  <p className={style.address}>{email}</p>
                )}
              </CardContent>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col tv={12} desk={12} tablet={2} palm={2}>
            {address[0] &&
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
          </Col>
        </Row>
        <Row>
          <Col tv={6} desk={6} tablet={2} palm={2}>
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
          </Col>
          <Col tv={6} desk={6} tablet={2} palm={2}>
            {contacts &&
            <Card>
              <CardTitle title="Contatos" />
              <CardContent>
                <ContactsTitle person_contacts={contacts} />
                {contacts.map(relatives =>
                  <Contacts person_contacts={relatives} />
                )}
              </CardContent>
            </Card>
            }
          </Col>
        </Row>
        <Row>
          <Col tv={6} desk={6} tablet={2} palm={2}>
            {work &&
            <Card>
              <CardTitle title="Locais de Trabalho" />
              <CardContent>
                <WorkTitle work_places={work} />
                {work.map(works =>
                  <WorkPlace work_places={works} />
                )}
              </CardContent>
            </Card>
            }
          </Col>
          <Col tv={6} desk={6} tablet={2} palm={2}>
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
          </Col>
        </Row>
        {/* {this.props.cpfJSON} */}
      </Grid>

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
