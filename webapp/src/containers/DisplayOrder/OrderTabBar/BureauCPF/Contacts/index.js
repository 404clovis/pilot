import React from 'react'
import PropTypes from 'prop-types'
import style from './../style.css'
import { Grid, Row, Col } from '../../../../../components/Grid'

const FormatStreet = (street, neighborhood, city, state, zipCode) => (
  <span>
    {street.toUpperCase()} {neighborhood.toUpperCase()} {city.toUpperCase()}
     - {state.toUpperCase()} {zipCode}
  </span>
)

class Contacts extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: {},
      copied: false,
      errors: {},
    }
  }

  render () {
    const doc = this.props.person_contacts.document_number

    return (
      <div className={style.address}>
        <Grid>
          <Row>
            {doc &&
            <Col tv={3} desk={3} tablet={12} palm={12}>
              {doc}
            </Col>
            }
            {this.props.person_contacts.name &&
            <Col tv={4} desk={4} tablet={12} palm={12}>
              {this.props.person_contacts.name}
            </Col>
            }
            {this.props.person_contacts.zip_code &&
            <Col tv={5} desk={5} tablet={12} palm={12}>
              {FormatStreet(
                this.props.person_contacts.street,
                this.props.person_contacts.neighborhood,
                this.props.person_contacts.city,
                this.props.person_contacts.state,
                this.props.person_contacts.zip_code
              )}
            </Col>
            }
          </Row>
        </Grid>
      </div>
    )
  }
}

Contacts.propTypes = {
  person_contacts: PropTypes.shape({
    city: PropTypes.string,
    document_number: PropTypes.string,
    name: PropTypes.string,
    neighborhood: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    zip_code: PropTypes.string,
  }),
}

Contacts.defaultProps = {
  person_contacts: {
    name: null,
  },
}

export default Contacts
